const { User } = require('../database/models');
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log(req.body);

        
    } catch (error) {
        res.status(500).json({success: false, message: 'Error creating user', data: error.message});
    }
})

module.exports = router;