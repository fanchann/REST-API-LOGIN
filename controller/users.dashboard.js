var express = require('express');
var router = express.Router();
var checkAuth = require('./users.login')

router.get('/dashboard', async (req, res) => {
    res.send('This dashboard!')
})

module.exports = router