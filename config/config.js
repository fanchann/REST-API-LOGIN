require('dotenv').config()

const {
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_HOSTNAME,
    DB_DIALECT
} = process.env

module.exports = {
    "development": {
        "username": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "host": DB_HOSTNAME,
        "dialect": DB_DIALECT
    },
    "test": {
        "username": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "host": DB_HOSTNAME,
        "dialect": DB_DIALECT
    },
    "production": {
        "username": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "host": DB_HOSTNAME,
        "dialect": DB_DIALECT
    }
}