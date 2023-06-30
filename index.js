require('dotenv').config();
const express = require('express');
const routesUsers = require('./routes/users');
const routesLogin = require('./routes/login');
const routesBooks = require('./routes/books');
const routesLibraries = require('./routes/libraries');
const { initializeDB } = require("./config/database");
const notFound = require('./middleware/notFound.js');
const handleErrors = require('./middleware/handleErrors');

const app = express();
app.use(express.json());

// Configuración de las rutas
app.use('/api', routesUsers());
app.use('/api', routesLogin());
app.use('/api', routesBooks());
app.use('/api', routesLibraries());

app.use(notFound);
app.use(handleErrors);

// Sincronización de la base de datos y arranque del servidor
const PORT = process.env.PORT;
app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in ${PORT}`);
});
