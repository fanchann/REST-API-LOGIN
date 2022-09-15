var express = require('express');
var router = express.Router();

router.get('/dashboard/', async (req, res) => {
    res.send('kontol');
});
module.exports = router