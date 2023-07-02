const express = require('express');
const router = express.Router();

//importar el controlador
const userController = require('../controllers/userController');

module.exports = function(){

    router.get('/user', userController.showUsers);
    router.post('/user', userController.createUser);

    return router;
}