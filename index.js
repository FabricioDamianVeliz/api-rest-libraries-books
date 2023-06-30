const express = require('express');
const routesUsers = require('./routes/users');
const routesLogin = require('./routes/login');
const routesBooks = require('./routes/books');
const routesLibraries = require('./routes/libraries');
const { initializeDB } = require("./config/database");

const app = express();
const PORT = 3000;

// Configuración de las rutas
app.use('/api', routesUsers());
app.use('/api', routesLogin());
app.use('/api', routesBooks());
app.use('/api', routesLibraries());

// Sincronización de la base de datos y arranque del servidor
app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in ${PORT}`);
});
