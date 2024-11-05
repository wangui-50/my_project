const express = require('express');
const {
    registerPatient,
    getPatients,
    updateProfile,
    deleteAccount
} = require('../controllers/patientController');

const router = express.Router();

// Create: Register a new patient
router.post('/register', registerPatient);

// Read: Get list of patients (admin only)
router.get('/', getPatients);

// Update: Update patient profile
router.put('/update', updateProfile);

// Delete: Delete patient account
router.delete('/delete', deleteAccount);

module.exports = router;
