const mongoose = require('mongoose');
const Trip = require('../models/travlr'); 
const Model = mongoose.model('trips'); // Refers to the Mongoose model registered

// GET: /trips - return all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Model.find({}).exec();
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

// POST: /trips - add a new trip
const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = await Model.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });
        return res.status(201).json(newTrip);
    } catch (err) {
        return res.status(400).json({ message: "Trip creation failed", error: err });
    }
};

// PUT: /trips/:tripCode - update a trip
const tripsUpdateOne = async (req, res) => {
    const tripCode = req.params.tripCode;

    try {
        const trip = await Model.findOneAndUpdate(
            { code: tripCode },
            {
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true }
        );

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }

        return res.status(200).json(trip);
    } catch (err) {
        return res.status(400).json({ message: "Trip update failed", error: err });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateOne
};
