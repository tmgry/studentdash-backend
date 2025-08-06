const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    description: String,
    status: {type: String, enum: ['to do', 'in progress', 'completed'], default: 'to do'},
    dueDate: Date,
    createdAt: {type: Date, default: Date.now},
    updatedAt: Date,
});

module.exports = mongoose.model('Task', taskSchema);