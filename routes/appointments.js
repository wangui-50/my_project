const express = require('express');
const {
    bookAppointment,
    getAppointments,
    updateAppointment,
    cancelAppointment
} = require('../controllers/appointmentController');

const router = express.Router();

// Create: Book a new appointment
router.post('/book', bookAppointment);

// Read: Get list of appointments
router.get('/', getAppointments);

// Update: Update appointment
router.put('/update', updateAppointment);

// Delete: Cancel appointment
router.delete('/cancel', cancelAppointment);

module.exports = router;
