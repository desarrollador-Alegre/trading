const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Coin', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    symbol: {
      type: DataTypes.STRING,
    },
    current_price: {
      type: DataTypes.DOUBLE,
    },
    price_change_percentage_24h: {
      type: DataTypes.STRING,
    },
    total_volume: {
      type: DataTypes.STRING,
    },
    
    edited_price: {
      type: DataTypes.DOUBLE,
    },
    
    expiration_time: {
      type: DataTypes.DATE,
    },


  }, );
};
