var {
    body,
    validationResult
} = require('express-validator');
const emailCheck = require('email-validator');
var bcrypt = require('bcrypt');
const SaltRound = 10
const bodyMust = [
    body('username').notEmpty(),
    body('email').notEmpty(),
    body('password').notEmpty()
];
const {
    loginUsers
} = require('../models');

const register = (bodyMust, async (req, res) => {
    const bodyCheck = validationResult(req)
    if (!bodyCheck.isEmpty()) {
        return res.json({
            status: 400,
            message: 'something went wrong!'
        })
    }
    const {
        username,
        password,
        email
    } = req.body
    try {
        if (emailCheck.validate(email)) {
            const check = await loginUsers.findOne({
                where: {
                    email: email
                }
            })
            check ? res.json({
                status: 400,
                message: email + ' is registered please any email'
            }) : bcrypt.hash(password, SaltRound, function(err, hash) {
                loginUsers.create({
                        username: username,
                        email: email,
                        password: hash
                    })
                    .then((data) => {
                        res.status(200).json({
                            message: 'succes register'
                        })
                    })
            })
        } else {
            return res.json({
                status: 400,
                message: email + ' this email?'
            })

        }
    } catch (error) {
        res.status(400).json({
            message: 'something went wrong'
        })
    }
})
module.exports = register