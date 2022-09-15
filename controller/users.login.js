const emailCheck = require('email-validator');
const {
    check
} = require('express-validator');
var bcrypt = require('bcrypt');
const SaltRound = 10;

const {
    loginUsers
} = require('../models');

const usersLogin = async (req, res) => {
    const {
        email,
        password
    } = req.body
    try {
        if (emailCheck.validate(email)) {
            const check = await loginUsers.findOne({
                    where: {
                        email: email
                    }
                })
                .then((data) => {
                    if (!data) return res.status(400).json({message: 'wrong email or password'})
                    bcrypt.compare(password, data.password, function(err, result) {
                        result ? res.redirect(200,'/dashboard/') : res.status(400).json({
                            message: 'password incorrect'
                        })
                    })
                })
        } else return res.json({status: 400,message: 'email ' + email + ' not valid'})
    } catch (error) {
        res.send(error)
    }
}

module.exports = usersLogin