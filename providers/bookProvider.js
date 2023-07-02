const Book = require('../models/book');

class BookProvider {

  async createBook(bookData) {
    try {
      const savedBook = await Book.create(bookData);
      return savedBook;
    } catch (error) {
      throw new Error('Error creating book');
    }
  }

  async getAllBooks() {
    try {
      const books = await Book.findAll();
      return books;
    } catch (error) {
      throw new Error('Error getting the books');
    }
  }

  async getBook(id) {
    try {
      const book = await Book.findByPk(id);
      return book;
    } catch (error) {
      throw new Error('Error getting the book');
    }
  }

  async updateBook(bookData) {
    try {
      const updatedBook = await bookData.save();
      return updatedBook;
    } catch (error) {
      throw new Error('Error updating the book');
    }
  }

  async deleteBook(book) {
    try {
      
      await book.destroy();
        
    } catch (error) {
      throw new Error('Error deleting the book');
    }
  }
}

module.exports = BookProvider;