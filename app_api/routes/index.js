const express = require('express');
const router = express.Router();

// Import the trips controller
const tripsController = require('../controllers/trips');

// GET all trips
router
    .route('/trips')
    .get(tripsController.tripsList);

// GET a single trip by code
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;
