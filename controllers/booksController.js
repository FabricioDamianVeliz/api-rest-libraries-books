const Book = require('../models/book');
const User = require('../models/user');
//const faker = require('faker');

// Controlador para crear un libro
exports.createBook = async(req,res,next) => {

    try {

        const { isbn, title, author, year, libraryId } = req.body;
        //const {userId} = req;

        //const user = await User.findById(userId);
        //console.log(req.body);
        if(!isbn || !title || !author || !year || !libraryId ){
            return res.status(400).json({
                error: 'Missing required field'
            });
        }
        
        const newBook = new Book({

            isbn,
            title,
            author,
            year,
            libraryId
            //,user: user._id  
        });

        const savedBook = await newBook.save();
        //user.events = user.events.concat(savedEvent._id);
        //await user.save();
        res.status(201).json(savedBook);

    } catch (error) {
        res.status(500).json({ error: 'Error creating book' });
    }

};

// Para mostrar todos los libros 
exports.getAllBooks = async(req,res,next) => {
    
    try {

        const books = await Book.findAll();

        res.json(books);
        
    } catch (error) {
        res.status(500).json({ error: 'Error getting the books' });
    }
    // const url = faker.image.image();
    // console.log(url);     
};

// Para mostrar un libro por id
exports.getBook = async(req,res,next) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
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
exports.updateBook = async(req,res,next) => {
    const { id } = req.params;
    const { title, author, year } = req.body;
    try {
        const book = await Book.findByPk(id);
        if (book) {
        await book.update({ title, author, year });
        res.json(book);
        } else {
        res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating the book' });
    }
};


// Para eliminar un libro de manera lógica

exports.deleteBook = async(req,res,next) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (book) {
        await book.destroy();
        res.json({ message: 'Book deleted successfully' });
        } else {
        res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting the book' });
    }
};



