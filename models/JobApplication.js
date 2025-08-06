const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    companyName: String,
    jobTitle: String,
    status: {
        type: String,
        enum: ['saved', 'applied', 'interviewing', 'offer', 'rejected'],
        default: 'saved'
    },
    deadline: Date,
    jobUrl: String,
    notes: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);