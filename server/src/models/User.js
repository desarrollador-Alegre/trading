const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.STRING
    },

    residential_country: {
      type: DataTypes.STRING
    },

    city: {
      type: DataTypes.STRING
    },
    street: {
      type: DataTypes.STRING
    },

    postal: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    },
    
    backgroundColor: {
      type: DataTypes.STRING
    },

    
    Role: {
      type: DataTypes.STRING
    },



  },);
};
