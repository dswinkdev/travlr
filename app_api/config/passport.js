const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user'); // exported User model

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // Tells Passport to use 'email' instead of 'username'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
          return done(null, false, {
            message: 'Incorrect username.',
          });
        }

        if (!user.validPassword(password)) {
          return done(null, false, {
            message: 'Incorrect password.',
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
