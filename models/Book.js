const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Library = require('./Library');

const Book = sequelize.define('book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  isbn: DataTypes.INTEGER,
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  year: DataTypes.STRING,
});

// Establecer la relación entre Library y Book
Book.belongsTo(Library, { foreignKey: 'libraryId' });
Library.hasMany(Book, { foreignKey: 'libraryId' });

module.exports = Book;