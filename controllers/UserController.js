const express = require('express');
const User = require('../models/User');

class UserController {
  async createUser(req, res) {
    try {
        const newuser = new User({
            name : req.body.name,
            email : req.body.email,

        });

    await newuser.save();
      res.status(200).json({ 
        message: ('User created successfully!'),
        user : newuser,
      });
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ message: 'Error creating user' });
    }
  }


}

module.exports = UserController;
