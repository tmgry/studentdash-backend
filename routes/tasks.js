const express = require('express');
const router = express.Router();
const Task = require('../models/Tasks');

//get all tasks for a user
router.get('/:userID', async (req, res) => {
    try {
        const tasks = await Task.find({ userID: req.params.userID });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//post a new task
router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//put (update) a task
router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//delete a task
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;