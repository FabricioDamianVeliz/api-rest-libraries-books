const Sequelize = require('sequelize');
const sequelize = require('../database');

const Library = sequelize.define('library', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  phone: Sequelize.STRING,
});

const Book = sequelize.define('book', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  isbn: Sequelize.INTEGER,
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  year: Sequelize.STRING,
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = { Library, Book, User };