const express = require('express');
const router = express.Router();
const JobApplication = require('../models/JobApplication');

//get all job applications for a user
router.get('/:userID', async (req, res) => {
    try {
        const jobs = await JobApplication.find({ userID: req.params.userID });
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//post a new job application
router.post('/', async (req, res) => {
    try {
        const newJob = new JobApplication(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


//put (update) a job application
router.put('/:id', async (req, res) => {
    try {
        const updatedJob = await JobApplication.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(updatedJob);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//delete a job application
router.delete('/:id', async (req, res) => {
    try {
        await JobApplication.findByIdAndDelete(req.params.id);
        res.json({ message: 'Job application deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;