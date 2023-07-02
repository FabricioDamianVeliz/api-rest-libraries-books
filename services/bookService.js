const BookProvider = require('../providers/bookProvider');

const bookProvider = new BookProvider();

class BookService {

  async createBook(bookData) {
    try {
      
      const savedBook = await bookProvider.createBook(bookData);
      return savedBook;
    } catch (error) {
      throw new Error('Error creating book');
    }
  }

  async getAllBooks() {
    try {
      const books = await bookProvider.getAllBooks();
      return books;
    } catch (error) {
      throw new Error('Error getting the books');
    }
  }

  async getBook(id) {
    try {
      const book = await bookProvider.getBook(id);
      return book;
    } catch (error) {
      throw new Error('Error getting the book');
    }
  }

  async updateBook(bookData) {
    try {
      const updatedBook = await bookProvider.updateBook(bookData);
      return updatedBook;
    } catch (error) {
      throw new Error('Error updating the book');
    }
  }

  async deleteBook(book) {
    try {
        await bookProvider.deleteBook(book);
    } catch (error) {
      throw new Error('Error deleting the book');
    }
  }
}

module.exports = BookService;