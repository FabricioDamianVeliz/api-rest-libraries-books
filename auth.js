const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('./models/models');

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ where: { name: username } }).then((user) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          return done(null, user);
        }
        return done(null, false, { message: 'Incorrect password.' });
      });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then((user) => {
    done(null, user);
  });
});

module.exports = passport;
