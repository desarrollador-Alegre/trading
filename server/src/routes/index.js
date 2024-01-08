
const { Coin } = require('../db'); // Ajusta la ruta según la ubicación de tu modelo Coin
const { Router }= require('express');
const router = Router();
const routerRegister = require('./register_router');
const routerLogin = require('./login_router');
const routerUsers= require('./users_router');
/* const routerLeads = require('./leads_router')  */
const routerMercado= require('./mercar_router');
const axios= require('axios');
const { conn } = require('../db');
const { Sequelize, DataTypes, Op } = require('sequelize');
const apiKey = 'CG-SL9TJHk1qyS216uVmtanWXUJ';
// Carga inicial de monedas desde la API de CoinGecko y las almacena en la base de datos
const cargarMonedasDesdeAPI = async () => {
    try {
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false&api_key=${apiKey}`
          );
      
      // Mapea los datos de la API y crea registros en la base de datos
      await Promise.all(response.data.map(async (coinData) => {
        await Coin.findOrCreate({
            where: { id: coinData.id },
            defaults: {
              image: coinData.image,
              name: coinData.name,
              symbol: coinData.symbol,
              current_price: coinData.current_price,
              total_volume: coinData.total_volume,
              price_change_percentage_24h: coinData.price_change_percentage_24h
              // ... otros campos que desees almacenar
            },
          });
          
      }));
  
      console.log('Carga inicial de monedas completada');
    } catch (error) {
      console.error('Error al cargar las monedas desde la API:', error);
    }
  };
  
  // Invoca la carga inicial al iniciar el servidor
  cargarMonedasDesdeAPI();
  
  router.get('/api/coins', async (req, res) => {
    try {
      // Consulta las monedas desde la base de datos y ordénalas por ID
      const coins = await Coin.findAll({
        order: [['id', 'ASC']],
      });
  
      res.json(coins);
    } catch (error) {
      console.error('Error al obtener la lista de monedas desde la base de datos:', error);
      res.status(500).json({ success: false, error: 'Error al obtener la lista de monedas' });
    }
  });
  
  
// Agrega una función para eliminar las monedas vencidas
const eliminarEditedPrice = async () => {
  try {
    await Coin.update({
      edited_price: null,
    }, {
      where: {
        expiration_time: {
          [Op.lte]: new Date(),
        },
      },
    });
    console.log('Campo "edited_price" eliminado de monedas vencidas.');
  } catch (error) {
    console.error('Error al eliminar el campo "edited_price":', error);
  }
};

// Ejecuta la función de eliminación periódicamente (cada minuto en este ejemplo)
setInterval(eliminarEditedPrice, 60 * 1000);

router.post('/api/coins/update-price', async (req, res) => {
  const {coinId, newPrice } = req.body;

  try {
    const updatedCoin = await Coin.findByPk(coinId);
    if (updatedCoin) {
      updatedCoin.edited_price = newPrice;
      // Establecer el tiempo de expiración (por ejemplo, 5 minutos desde ahora)
      updatedCoin.expiration_time = new Date(Date.now() + 5 * 60 * 1000);
      await updatedCoin.save();
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, error: 'Moneda no encontrada' });
    }
  } catch (error) {
    console.error('Error al actualizar el precio en la base de datos:', error);
    res.status(500).json({ success: false, error: 'Error al actualizar el precio' });
  }
});



router.use('/', routerRegister, routerLogin, routerUsers, routerMercado )

module.exports = router