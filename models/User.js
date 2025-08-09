const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    name: String,
    role: { type: String, enum: ['student', 'admin'], default: 'student' },
    settings: {
        darkMode: {type: Boolean, default: false }
    }
});

module.exports = mongoose.model('User', userSchema);