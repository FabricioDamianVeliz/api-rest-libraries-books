const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Library = sequelize.define('library', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  location: DataTypes.STRING,
  phone: DataTypes.STRING,
});

module.exports = Library;