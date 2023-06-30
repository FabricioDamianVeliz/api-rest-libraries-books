const Library = require('../models/Library');
const Book = require('../models/Book');
const User = require('../models/User');
//const faker = require('faker');

// Controlador para crear una libreria
exports.createLibrary = async(req,res,next) => {

    try {

        const { name, location, phone } = req.body;

        //const {userId} = req;
        //const user = await User.findById(userId);

        if(!name || !location || !phone){
            return res.status(400).json({
                error: 'Missing required field'
            });
        }

        const newLibrary = new Library({

            name,
            location,
            phone
        });

        const savedLibrary = await newLibrary.save();

        //user.events = user.events.concat(savedEvent._id);
        //await user.save();

        res.status(201).json(savedLibrary);

    } catch (error) {
        res.status(500).json({ error: 'Error creating library' });
    }

};

// Para mostrar todas las librerías
exports.getAllLibraries = async(req,res,next) => {
    
    try {

        const libraries = await Library.findAll({
            include: Book // Incluye la asociación con el modelo Book
          });

        res.json(libraries);
        
    } catch (error) {
        res.status(500).json({ error: 'Error getting the libraries' });
    }
    // const url = faker.image.image();
    // console.log(url);     
};

// Para mostrar una librería por id
exports.getLibrary = async(req,res,next) => {
    const { id } = req.params;
    console.log(id);
    try {
        const library = await Library.findByPk(id, {
            include: Book 
          });

        if (library) {
        res.json(library);
        } else {
        res.status(404).json({ error: 'Library not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error getting the library' });
    }
};

// Para actualizar una librería 
exports.updateLibrary = async(req,res,next) => {
    const { id } = req.params;
    const { name, location } = req.body;
    try {
        const library = await Library.findByPk(id);
        if (library) {
        await library.update({ name, location });
        res.json(library);
        } else {
        res.status(404).json({ error: 'Library not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating the library' });
    }
};

// Para eliminar una librería de manera lógica

exports.deleteLibrary = async(req,res,next) => {
    const { id } = req.params;
    try {
        const library = await Library.findByPk(id);
        if (library) {
        await library.destroy();
        res.json({ message: 'Library deleted successfully' });
        } else {
        res.status(404).json({ error: 'Library not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting the library' });
    }
};