const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./Models/db'); // Database connection

// Initialize app
const app = express();

// Middleware
app.use(express.json()); // Built-in body parser
app.use(bodyParser.json()); // Optional (you can remove if using only express.json)
app.use(cors());

// Routes
const authRoutes = require('./Routes/AuthRouter');
const appointmentRoutes = require('./Routes/appointmentRoutes');

app.use('/auth', authRoutes);
app.use('/appointments', appointmentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server started at port ${PORT}`);
});
