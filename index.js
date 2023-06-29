const express = require('express');
const passport = require('passport');
const session = require('express-session');
const routes = require('./routes/routes.js');
const auth = require('./auth');
const sequelize = require('./database');

const app = express();
const port = 3000;

// Configuración de Passport y Express-Session
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Configuración de las rutas
app.use('/api', routes);

// Sincronización de la base de datos y arranque del servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
