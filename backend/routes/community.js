const express = require('express');
const router = express.Router();

// Mock community data
const posts = [
    { id: 1, author: 'Anita', content: 'Seeking advice on start-up funding for women entrepreneurs.', date: '2026-02-01' },
    { id: 2, author: 'Priya', content: 'Just finished a skill training session, feeling empowered! 🚀', date: '2026-02-03' }
];

router.get('/posts', (req, res) => {
    res.json(posts);
});

router.post('/posts', (req, res) => {
    const { author, content } = req.body;
    const newPost = { id: posts.length + 1, author, content, date: new Date().toISOString().split('T')[0] };
    posts.push(newPost);
    res.json(newPost);
});

module.exports = router;
