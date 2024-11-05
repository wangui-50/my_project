//import
const express = require('express');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patients');
const doctorRoutes = require('./routes/doctors');
const appointmentRoutes = require('./routes/appointments');
const adminRoutes = require('./routes/admin');
const pool= require('./config/db');

const app = express();

//set-up middleware
app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes)
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/admin', adminRoutes);

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/test', (req, res) => {
    console.log("Request Body:", req.body);
    res.json({ message: 'Received!', body: req.body });
});

/* Test database connection route*/
app.get('/test-db', async (req, res) => {
    try {
        // Use the promise-based query
        const [results] = await pool.query('SELECT 1');
        res.status(200).json({ message: 'Database connection successful', results });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ error: 'Database connection failed' });
    }
});


const PORT = process.env.PORT ||4500;

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`)
});