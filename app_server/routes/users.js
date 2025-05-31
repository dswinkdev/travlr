const express = require('express');
const router = express.Router();

// Example route
router.get('/', function(req, res, next) {
  res.send('respond with a user resource');
});

module.exports = router;
