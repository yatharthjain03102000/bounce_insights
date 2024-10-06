const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${process.env.NASA_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching NeoWs data:', error);
        res.status(500).json({ message: 'Failed to fetch NeoWs data' });
    }
});

module.exports = router;
