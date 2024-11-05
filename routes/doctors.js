const express = require('express');
const {
    addDoctor,
    getDoctors,
    updateDoctor,
    deleteDoctor
} = require('../controllers/doctorController');

const router = express.Router();

// Create: Add a new doctor
router.post('/add', addDoctor);

// Read: Get list of doctors
router.get('/', getDoctors);

// Update: Update doctor profile
router.put('/update', updateDoctor);

// Delete: Delete doctor profile
router.delete('/delete', deleteDoctor);

module.exports = router;
