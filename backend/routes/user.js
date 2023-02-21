
const express = require('express')
 
// controller functions
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// login route 
router.post('/login', loginUser)

// sign up route
router.post('/signup', signupUser)

// post requests handlers because we are sending information to the backend 

module.exports = router;

