const db = require('../config/db');

// Create: Add a new doctor
exports.addDoctor = async (req, res) => {
    const { name, specialization, availability } = req.body;
    try {
        await db.execute('INSERT INTO doctors (name, specialization, availability) VALUES (?, ?, ?)', [
            name,
            specialization,
            availability
        ]);
        res.status(201).json({ message: 'Doctor added successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Read: Get list of doctors
exports.getDoctors = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM doctors');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Update: Update doctor profile
exports.updateDoctor = async (req, res) => {
    const { id, name, specialization, availability } = req.body;
    try {
        await db.execute('UPDATE doctors SET name = ?, specialization = ?, availability = ? WHERE id = ?', [
            name,
            specialization,
            availability,
            id
        ]);
        res.status(200).json({ message: 'Doctor profile updated successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Delete: Delete doctor profile
exports.deleteDoctor = async (req, res) => {
    const { id } = req.body; 
    try {
        await db.execute('DELETE FROM doctors WHERE id = ?', [id]);
        res.status(200).json({ message: 'Doctor profile deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};
