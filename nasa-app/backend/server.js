const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/apod', require('./routes/apod'));
app.use('/api/mars-photos', require('./routes/marsPhotos'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
