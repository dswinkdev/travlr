const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: String,
  description: String,
  price: Number,
  duration: Number
  // add other fields you want
});

mongoose.model('Trip', tripSchema);
