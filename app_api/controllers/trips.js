const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model
const Model = mongoose.model('trips'); // get model

// GET: /trips - return all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Model.find({}).exec();
        console.log(trips);
        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: "No trips found" });
        }
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json({ message: "Error fetching trips", error: err });
    }
};

// GET: /trips/:tripCode - return trip by code
const tripsFindByCode = async (req, res) => {
    const tripCode = req.params.tripCode;

    try {
        const trip = await Model.findOne({ code: tripCode }).exec();
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        return res.status(200).json(trip);
    } catch (err) {
        return res.status(500).json({ message: "Error fetching trip", error: err });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
