const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:rover/:sol', async (req, res) => {
    const { rover, sol } = req.params;
    try {
        console.log(`Fetching photos for rover: ${rover}, sol: ${sol}`); // Log the request
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${process.env.NASA_API_KEY}`);
        console.log(`Received response:`, response.data); // Log the response
        res.json(response.data.photos);
    } catch (error) {
        console.error('Error fetching Mars rover photos:', error); // Log the error
        res.status(500).json({ message: 'Error fetching Mars rover photos' });
    }
});

module.exports = router;