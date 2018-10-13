var LocalStrategy    = require('passport-local').Strategy;

// load up the user model
var Account             = require('../routes/models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

	passport.use('local-login', new LocalStrategy(
        
	  function(username, password, done) {
        console.log('hello',username,password);
	    Account.findOne({
	      username: username.toLowerCase()
	    }, function(err, user) {
	      // if there are any errors, return the error before anything else
           if (err) {
               console.log('hello');
               return done(err);
           }

           // if no user is found, return the message
           if (!user) {console.log('fwef1');
               return done(null, false);
        }

           // if the user is found but the password is wrong
           if (!user.validPassword(password)) {
            console.log('fwef2');
               return done(null, false); 
           }

           // all is well, return successful user
           return done(null, user);
	    });
	  }
	));

 
};