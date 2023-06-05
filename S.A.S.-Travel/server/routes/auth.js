let express = require('express'),
    router = express.Router();

let authenticationController = require('../controllers/authController.js');

/**
 * (POST Method)
 */
// SignUp
router.post('/signup', authenticationController.signup);

//SignIn
router.post('/signin', authenticationController.signin);

//SignOut
router.get('/signout', authenticationController.signout);

module.exports = router;