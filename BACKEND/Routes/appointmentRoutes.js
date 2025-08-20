const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../Middleware/ensureAuthenticated');

const { bookAppointment, getAppointments } = require('../controllers/appointmentController');

// Book appointment (Protected route)
router.post('/book', ensureAuthenticated, bookAppointment);

// Get all appointments (Protected route)
router.get('/', ensureAuthenticated, getAppointments);

module.exports = router;
