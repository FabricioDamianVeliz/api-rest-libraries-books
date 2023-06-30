const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Library = require('./Library');

const Book = sequelize.define('book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
    unique: false
  },
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  year: DataTypes.STRING,
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  libraryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Library,
      key: 'id'
    }
  }
}, {
  paranoid: true, // Habilitar borrado lógico
});

// Establecer la relación entre Library y Book
Book.belongsTo(Library, { foreignKey: 'libraryId' });
Library.hasMany(Book, { foreignKey: 'libraryId', onDelete:'SET NULL' });

module.exports = Book;