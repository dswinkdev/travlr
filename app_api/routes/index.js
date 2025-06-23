const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Import controllers
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// Import auth middleware (adjust the path if needed)
const authenticateJWT = require('../middleware/auth');

// User registration and login
router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

// Trips routes
router
  .route('/trips')
  .get(tripsController.tripsList)                      // Public: list all trips
  .post(authenticateJWT, tripsController.tripsAddTrip);  // Protected: add trip

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)                // Public: get single trip
  .put(authenticateJWT, tripsController.tripsUpdateOne);  // Protected: update trip

module.exports = router;
