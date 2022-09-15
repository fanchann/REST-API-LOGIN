var express = require('express');
var router = express.Router();

var usersRegister = require('../controller/users.register');
var usersLogin = require('../controller/users.login')

router.post('/register', usersRegister);
router.post('/login', usersLogin)


module.exports = router