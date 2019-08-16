var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    //Get
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    
    //Post
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
 
    ));
 
 

}