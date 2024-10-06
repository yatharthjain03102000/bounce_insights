const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:searchTerm', async (req, res) => {
    const { searchTerm } = req.params;
    try {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${searchTerm}`);
        res.json(response.data.collection.items);
    } catch (error) {
        console.error('Error fetching NASA Image Library data:', error);
        res.status(500).json({ message: 'Failed to fetch NASA Image Library data' });
    }
});

module.exports = router;
