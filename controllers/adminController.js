const db = require('../config/db');

// Create: Add a new admin
exports.addAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await db.execute('INSERT INTO admins (name, email, password) VALUES (?, ?, ?)', [
            name,
            email,
            password
        ]);
        res.status(201).json({ message: 'Admin added successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Read: Get list of admins
exports.getAdmins = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM admins');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Update: Update admin profile
exports.updateAdmin = async (req, res) => {
    const { id, name, email, password } = req.body;
    try {
        await db.execute('UPDATE admins SET name = ?, email = ?, password = ? WHERE id = ?', [
            name,
            email,
            password,
            id
        ]);
        res.status(200).json({ message: 'Admin profile updated successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Delete: Delete admin profile
exports.deleteAdmin = async (req, res) => {
    const { id } = req.body;
    try {
        await db.execute('DELETE FROM admins WHERE id = ?', [id]);
        res.status(200).json({ message: 'Admin profile deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};
