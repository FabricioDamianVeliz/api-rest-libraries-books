const express = require('express');
const router = express.Router();
const userExtractor = require('../middleware/userExtractor');

//importar el controlador
const libraryController = require('../controllers/libraryController');

module.exports = function(){

    //ruta para el home
    router.get('/',(req,res) => {
        res.send('<h1>Hola Mundo</h1>');
    });

    //rutas para el logueado

    // Ruta para crear una librería
    router.post('/library', userExtractor, libraryController.createLibrary);
    // Ruta para actualizar una librería
    router.put('/library/:id', userExtractor, libraryController.updateLibrary);
    // Ruta para eliminar una librería de manera lógica
    router.delete('/library/:id', userExtractor, libraryController.deleteLibrary);

    //rutas para el visitante

    // Ruta para obtener todas las librerías y sus libros
    router.get('/library', libraryController.getAllLibraries);
    // Ruta para obtener una librería y todos sus libros
    router.get('/library/:id', libraryController.getLibrary);

    return router;
}