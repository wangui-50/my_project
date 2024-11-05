const express = require('express');
const {
    addAdmin,
    getAdmins,
    updateAdmin,
    deleteAdmin
} = require('../controllers/adminController'); 

const router = express.Router();

// Create: Add a new admin
router.post('/add-admin', addAdmin);

// Read: Get list of admins
router.get('/admins', getAdmins);

// Update: Update admin profile
router.put('/update-admin', updateAdmin);

// Delete: Delete admin profile
router.delete('/delete-admin', deleteAdmin);

module.exports = router;
