const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
//const Book = require('../models/Book');

const Library = sequelize.define('library', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  location: DataTypes.STRING,
  phone: DataTypes.STRING,
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  }
}, {
  paranoid: true, // Habilitar borrado lógico
});


module.exports = Library;