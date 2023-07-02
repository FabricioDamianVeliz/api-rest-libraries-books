const LibraryProvider = require('../providers/libraryProvider');
const libraryProvider = new LibraryProvider();

class LibraryService {

  async createLibrary(libraryData) {
    try {
      const savedLibrary = await libraryProvider.createLibrary(libraryData);
      return savedLibrary;
    } catch (error) {
      throw new Error('Error creating library');
    }
  }

  async getAllLibraries() {
    try {
      const libraries = await libraryProvider.getAllLibraries();
      return libraries;
    } catch (error) {
      throw new Error('Error getting the libraries');
    }
  }

  async getLibrary(id) {
    try {
      const library = await libraryProvider.getLibrary(id);
      return library;
    } catch (error) {
      throw new Error('Error getting the library');
    }
  }

  async updateLibrary(libraryData) {
    try {
        const updatedLibrary = await libraryProvider.updateLibrary(libraryData);
        return updatedLibrary;
    } catch (error) {
      throw new Error('Error updating the library');
    }
  }

  async deleteLibrary(library) {
    try {
        await libraryProvider.deleteLibrary(library);
    } catch (error) {
      throw new Error('Error deleting the library');
    }
  }
}

module.exports = LibraryService;

