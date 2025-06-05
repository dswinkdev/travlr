const moogoose = require('mongoose');
const { index } = require('../../app_server/controllers/main');

// Define the trip schema
const tripSchema = new moogoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
const Trip = moogoose.model('trips', tripSchema);
module.exports = Trip;
