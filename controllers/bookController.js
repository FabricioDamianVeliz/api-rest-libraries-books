const BookService = require('../services/bookService');
const bookService = new BookService();

// Para crear un libro
exports.createBook = async (req, res, next) => {
  try {
    const { isbn, title, author, year, libraryId } = req.body;

    if (!isbn || !title || !author || !year || !libraryId) {
      return res.status(400).json({
        error: 'Missing required field'
      });
    }
    const bookData = {

        isbn,
        title,
        author,
        year,
        libraryId 
    };

    const savedBook = await bookService.createBook(bookData);
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: 'Error creating book' });
  }
};

// Para mostrar todos los libros 
exports.getAllBooks = async (req, res, next) => {
    try {
      const books = await bookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Error getting the books' });
    }
};

// Para mostrar un libro por id
exports.getBook = async (req, res, next) => {
    try {
     const { id } = req.params;
     const book = await bookService.getBook(id);
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error getting the book' });
    }
};

// Para actualizar un libro 
exports.updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, author, year } = req.body;

        const bookData = await bookService.getBook(id);
        if (bookData) {
            bookData.title = title;
            bookData.author = author;
            bookData.year = year;
        } 

        const updatedBook = await bookService.updateBook(bookData);

        if (updatedBook) {
            res.json(updatedBook);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
      res.status(500).json({ error: 'Error updating the book' });
    }
};


// Para eliminar un libro de manera lógica
exports.deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;

        const book = await bookService.getBook(id);
        if (book) {
            await bookService.deleteBook(book);
            res.json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting the book' });
    }
  };



