const mongoose = require('mongoose');
const User = require('../models/user');
const passport = require('passport');

const register = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({ message: 'All fields required.' });
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: ''
    });

    user.setPassword(req.body.password);

    try {
        const q = await user.save();

        if (!q) {
            return res.status(400).json({ message: 'User not saved.' });
        } else {
            const token = user.generateJWT();
            // Wrap token in an object
            return res.status(200).json({ token: token });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Error registering user.', error: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required.' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user || !user.validPassword(password)) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const token = user.generateJWT();
        // Wrap token in an object
        return res.status(200).json({ token: token });
    } catch (err) {
        return res.status(500).json({ message: 'Error logging in.', error: err.message });
    }
};

module.exports = {
    register,
    login,
};
