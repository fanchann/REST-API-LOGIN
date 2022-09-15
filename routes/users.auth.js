var express = require('express');
var router = express.Router();

var usersRegister = require('../controller/users.register');
var usersLogin = require('../controller/users.login')


router.post('/register', usersRegister);
router.post('/login', usersLogin)
router.get('/dashboard', async (req, res) => {
    // If the user is loggedin
    if (req.session) {
        // Output username
        res.send('Welcome back !');
    } else {
        // Not logged in
        res.send('Please login to view this page!');
    }
    res.end();
});

module.exports = router