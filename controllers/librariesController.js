const Library = require('../models/Library');
const User = require('../models/User');
//const faker = require('faker');

// Controlador para crear una libreria
exports.createLibrary = async(req,res,next) => {

    try {

        console.log("1");
        console.log(req.body);

        const { name, location, phone } = req.body;

        console.log(name);

        //const {userId} = req;
        //const user = await User.findById(userId);

        console.log("2");

        if(!name || !location || !phone){
            return res.status(400).json({
                error: 'Missing required field'
            });
        }

        console.log("3");

        const newLibrary = new Library({

            name,
            location,
            phone 
        });

        console.log("4");
        console.log(newLibrary);

        const savedLibrary = await newLibrary.save();
        console.log(savedLibrary);

        //user.events = user.events.concat(savedEvent._id);
        //await user.save();

        res.status(201).json(savedLibrary);

    } catch (error) {
        res.status(500).json({ error: 'Error creating library' });
    }

  }

  exports.getAllLibraries = async(req,res,next) => {
    
    try {

        const libraries = await Library.findAll({});

        res.json(libraries);
        
    } catch (error) {
        next(error);
    }
    // const url = faker.image.image();
    // console.log(url);     
};