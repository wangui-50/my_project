const db = require('../config/db');

// Create: Book a new appointment
exports.bookAppointment = async (req, res) => {
    const { patientId, doctorId, appointmentDate } = req.body;
    try {
        await db.execute('INSERT INTO appointments (patient_id, doctor_id, appointment_date) VALUES (?, ?, ?)', [
            patientId,
            doctorId,
            appointmentDate
        ]);
        res.status(201).json({ message: 'Appointment booked successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Read: Get list of appointments
exports.getAppointments = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM appointments');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Update: Update appointment
exports.updateAppointment = async (req, res) => {
    const { id, appointmentDate } = req.body;
    try {
        await db.execute('UPDATE appointments SET appointment_date = ? WHERE id = ?', [
            appointmentDate,
            id
        ]);
        res.status(200).json({ message: 'Appointment updated successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};

// Delete: Cancel appointment
exports.cancelAppointment = async (req, res) => {
    const { id } = req.body; 
    try {
        await db.execute('DELETE FROM appointments WHERE id = ?', [id]);
        res.status(200).json({ message: 'Appointment canceled successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred!', error });
    }
};
