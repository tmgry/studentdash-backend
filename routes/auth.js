const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

//register route
router.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'Email already in use' });

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({ email, passwordHash, name });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne ({ email });
        if (!user) return res.status(400).json({ error: 'Invalid email or password' });

        const validPassword = await bcrypt.compare(password, user.passwordHash);
        if (!validPassword) return res.status(400).json({ error: 'Invalid email or password' });

        //placeholder response for now
        res.json({ message: 'Login successful', userID: user._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;