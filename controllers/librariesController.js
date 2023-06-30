const Library = require('../models/Library');
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

  }