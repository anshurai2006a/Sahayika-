const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const prisma = require('./db');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');
const safetyRoutes = require('./routes/safety');
const communityRoutes = require('./routes/community');

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/safety', safetyRoutes);
app.use('/api/community', communityRoutes);

app.get('/', (req, res) => {
    res.send('Sahayika API is running...');
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app; // Export for Vercel
