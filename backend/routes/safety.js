const express = require('express');
const router = express.Router();
const prisma = require('../db');

// Send SOS Alert
router.post('/sos', async (req, res) => {
    const { userId, latitude, longitude } = req.body;
    try {
        const alert = await prisma.sOSAlert.create({
            data: {
                userId,
                latitude,
                longitude
            }
        });
        res.json({ message: 'SOS Alert sent to trusted contacts!', alert });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
