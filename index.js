require('dotenv').config();
const express = require('express');
const routesUser = require('./routes/user');
const routesLogin = require('./routes/login');
const routesBook = require('./routes/book');
const routesLibrary = require('./routes/library');
const { initializeDB } = require("./config/database");
const notFound = require('./middleware/notFound.js');
const handleErrors = require('./middleware/handleErrors');

const app = express();
app.use(express.json());

// Configuración de las rutas
app.use('/api', routesUser());
app.use('/api', routesLogin());
app.use('/api', routesBook());
app.use('/api', routesLibrary());

app.use(notFound);
app.use(handleErrors);

// Sincronización de la base de datos y arranque del servidor
const PORT = process.env.PORT;
app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in ${PORT}`);
});
