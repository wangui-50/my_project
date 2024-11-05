//import
const express = require('express')
const { registerUser, loginUser, viewProfile, updateProfile, logoutUser } = require('../controllers/authController')
const router = express.Router();

//user registration
router.post('/register', registerUser);

//user login 
router.post('/login', loginUser);

//view profile
router.get('/profile' , viewProfile)

//update profile
router.put('/profile', updateProfile)

//log out
router.post('/logout', logoutUser)

module.exports = router;