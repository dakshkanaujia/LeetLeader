const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const profileController = require('../controllers/profileController');

router.post('/register', userController.registerUser);

router.post('/getProfile', profileController.createOrFetchProfile);

router.get('/getAllProfiles', profileController.getAllProfiles);

router.post('/login', userController.loginUser);

module.exports = router;