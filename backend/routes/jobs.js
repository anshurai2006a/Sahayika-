const express = require('express');
const router = express.Router();
const prisma = require('../db');

// Get all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await prisma.job.findMany();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Apply for a job
router.post('/apply', async (req, res) => {
    const { jobId, userId } = req.body;
    try {
        // Logic to link user and job
        // Actually our schema needs a many-to-many or update
        await prisma.user.update({
            where: { id: userId },
            data: {
                jobs: {
                    connect: { id: jobId }
                }
            }
        });
        res.json({ message: 'Application sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
