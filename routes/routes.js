const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { Library, Book, User } = require('../models/models');



const router = express.Router();



// Login route
router.post('/user/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login successful' });
});



// Middleware to verify user authentication
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
}



// Routes for libraries
router.get('/library', (req, res) => {
  Library.findAll({ include: Book }).then((libraries) => {
    res.json(libraries);
  });
});

router.get('/library/:id', (req, res) => {
  const { id } = req.params;
  Library.findByPk(id, { include: Book }).then((library) => {
    if (library) {
      res.json(library);
    } else {
      res.status(404).json({ error: 'Library not found' });
    }
  });
});

router.post('/library', isAuthenticated, (req, res) => {
    const { name, location, phone } = req.body;
    Library.create({ name, location, phone })
      .then((library) => {
        res.json(library);
      })
      .catch((error) => {
        res.status(400).json({ error: 'Failed to create library' });
      });
  });

  router.put('/library/:id', isAuthenticated, (req, res) => {
    const { id } = req.params;
    const { name, location, phone } = req.body;
    Library.findByPk(id)
      .then((library) => {
        if (library) {
          library.update({ name, location, phone })
            .then((updatedLibrary) => {
              res.json(updatedLibrary);
            })
            .catch((error) => {
              res.status(400).json({ error: 'Failed to update library' });
            });
        } else {
          res.status(404).json({ error: 'Library not found' });
        }
      });
  });

  router.delete('/library/:id', isAuthenticated, (req, res) => {
    const { id } = req.params;
    Library.findByPk(id)
      .then((library) => {
        if (library) {
          library.destroy()
            .then(() => {
              res.json({ message: 'Library deleted successfully' });
            })
            .catch((error) => {
              res.status(400).json({ error: 'Failed to delete library' });
            });
        } else {
          res.status(404).json({ error: 'Library not found' });
        }
      });
  });

  

// Routes for books
router.get('/book', (req, res) => {
  Book.findAll().then((books) => {
    res.json(books);
  });
});

router.get('/book/:id', (req, res) => {
  const { id } = req.params;
  Book.findByPk(id).then((book) => {
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  });
});

router.post('/book', isAuthenticated, (req, res) => {
    const { isbn, title, author, year, libraryId } = req.body;
    Book.create({ isbn, title, author, year, libraryId })
      .then((book) => {
        res.json(book);
      })
      .catch((error) => {
        res.status(400).json({ error: 'Failed to create book' });
      });
  });

  router.put('/book/:id', isAuthenticated, (req, res) => {
    const { id } = req.params;
    const { isbn, title, author, year, libraryId } = req.body;
    Book.findByPk(id)
      .then((book) => {
        if (book) {
          book.update({ isbn, title, author, year, libraryId })
            .then((updatedBook) => {
              res.json(updatedBook);
            })
            .catch((error) => {
              res.status(400).json({ error: 'Failed to update book' });
            });
        } else {
          res.status(404).json({ error: 'Book not found' });
        }
      });
  });

  router.delete('/book/:id', isAuthenticated, (req, res) => {
    const { id } = req.params;
    Book.findByPk(id)
      .then((book) => {
        if (book) {
          book.destroy()
            .then(() => {
              res.json({ message: 'Book deleted successfully' });
            })
            .catch((error) => {
              res.status(400).json({ error: 'Failed to delete book' });
            });
        } else {
          res.status(404).json({ error: 'Book not found' });
        }
      });
  });
  


module.exports = router;
