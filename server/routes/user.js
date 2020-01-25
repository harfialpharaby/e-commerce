const express = require('express')
const router = express.Router()
const userController = require('../controllers/user');

// define the home page route
router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router