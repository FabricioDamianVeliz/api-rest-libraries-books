const express = require('express');
const router = express.Router();
const userExtractor = require('../middleware/userExtractor');

//importar el controlador
const bookController = require('../controllers/bookController');

module.exports = function(){

    //ruta para el home
    router.get('/',(req,res) => {
        res.send('<h1>Hola Mundo</h1>');
    });

    //rutas para el logueado

    // Ruta para crear un libro
    router.post('/book', userExtractor, bookController.createBook);
    // Ruta para actualizar un libro
    router.put('/book/:id', userExtractor, bookController.updateBook);
    // Ruta para eliminar un libro de manera lógica
    router.delete('/book/:id', userExtractor, bookController.deleteBook);
    //router.delete('/book/:id', userExtractor, booksController.deleteBook);

    //rutas para el visitante

    // Ruta para obtener todos los libros
    router.get('/book', bookController.getAllBooks);
    // Ruta para obtener un libro en particular
    router.get('/book/:id', bookController.getBook);

    return router;
}