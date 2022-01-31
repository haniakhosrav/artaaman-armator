const adminModel = require('../model/adminModel');
const passport = require('passport');
const {Strategy} = require('passport-local');

passport.use(new Strategy({usernameField: 'email'}, async (email, password, done) => {
    const user = await adminModel.findOne({email, password});
        if(!user) return done(null, false);
        return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    adminModel.findById(id, function (err, user) {
        done(err, user);
    });
});