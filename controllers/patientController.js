const db = require('../config/db');
const bcrypt = require('bcryptjs');

// Create: Register a new patient
exports.registerPatient = async (req, res) => {
     // Log the entire request body to see what data is being sent
     console.log("Request Body:", req.body);
    const { first_name, last_name, email, password } = req.body;
    // Log each individual field to ensure they are not undefined
    console.log("First Name:", first_name);
    console.log("Last Name:", last_name);
    console.log("Email:", email);
    console.log("Password:", password);

    try {
        const [rows] = await db.execute('SELECT * FROM patients WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'Patient already exists!' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.execute('INSERT INTO patients (first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?)', [
            first_name,
            last_name,
            email,
            hashedPassword
        ]);
    
        res.status(201).json({ message: 'Patient registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Read: Get list of patients (admin only)
exports.getPatients = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM patients');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Update: Update patient profile
exports.updateProfile = async (req, res) => {
    const { id, first_name, last_name, email } = req.body;
    try {
        await db.execute('UPDATE patients SET first_name = ?, last_name= ?, email = ? WHERE id = ?', [first_name, last_name, email, id]);
        res.status(200).json({ message: 'Profile updated successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Delete: Delete patient account
exports.deleteAccount = async (req, res) => {
    const { id } = req.body; 
    try {
        await db.execute('DELETE FROM patients WHERE id = ?', [id]);
        res.status(200).json({ message: 'Account deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};
