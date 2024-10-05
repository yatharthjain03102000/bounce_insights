const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Existing routes
app.use('/api/apod', require('./routes/apod'));
app.use('/api/mars-photos', require('./routes/marsPhotos'));

// New routes
app.use('/api/neows', require('./routes/neows'));             // Near Earth Object Web Service
app.use('/api/nasa-images', require('./routes/nasaImages'));  // NASA Image and Video Library

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
