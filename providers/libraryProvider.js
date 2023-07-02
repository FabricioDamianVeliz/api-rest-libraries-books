const Library = require('../models/library');
const Book = require('../models/book');

class LibraryProvider {

  async createLibrary(libraryData) {
    try {
      const savedLibrary = await Library.create(libraryData);
      return savedLibrary;
    } catch (error) {
      throw new Error('Error creating library');
    }
  }

  async getAllLibraries() {
    try {
      const libraries = await Library.findAll({
        include: Book // Incluye la asociación con el modelo Book
      });
      return libraries;
    } catch (error) {
      throw new Error('Error getting the libraries');
    }
  }

  async getLibrary(id) {
    try {
      const library = await Library.findByPk(id, {
        include: Book
      });
      return library;
    } catch (error) {
      throw new Error('Error getting the library');
    }
  }

  async updateLibrary(libraryData) {
    try {
      const updatedLibrary = await libraryData.save();
      return updatedLibrary;
    } catch (error) {
      throw new Error('Error updating the library');
    }
  }

  async deleteLibrary(library) {
    try {
      await library.destroy();
    } catch (error) {
      throw new Error('Error deleting the library');
    }
  }
}

module.exports = LibraryProvider;

