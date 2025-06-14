const express = require('express');
const router = express.Router();

// Import the trips controller
const tripsController = require('../controllers/trips');

// GET all trips, POST a new trip
router
  .route('/trips')
  .get(tripsController.tripsList)      // GET Method routes tripList
  .post(tripsController.tripsAddTrip); // POST Method adds a trip

// GET a single trip by code
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(tripsController.tripsUpdateOne);
  
module.exports = router;
