const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Create user
router.post('/users', UserController.createUser);


module.exports = router;
