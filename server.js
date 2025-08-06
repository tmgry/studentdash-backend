const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const taskRoutes = require('./routes/tasks');
const jobRoutes = require('./routes/jobs');

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());
app.use('.api/tasks', taskRoutes);
app.use('/api/jobs', jobRoutes);


//root route
app.get('/', (req, res) => {
    res.send('API is running...');
});

//starting the server after DB connects
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});
