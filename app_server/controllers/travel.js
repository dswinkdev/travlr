const fetch = require('node-fetch'); // define fetch for Node.js

const tripsEndpoint = "http://localhost:3000/api/trips"; // API endpoint for trips
const options = {
	method: 'GET',
	headers: {
		Accept: 'application/json'
	},
};

/* GET travel view */
const travel = async function (req, res, next) {
	try {
		const response = await fetch(tripsEndpoint, options);
		const json = await response.json();

		let message = null;

		// Check if the result is not an array
		if (!(json instanceof Array)) {
			message = "API lookup error";
			console.error("Expected array but got:", typeof json);
			return res.render("travel", {
				title: "Travlr Getaways",
				trips: [],
				message
			});
		}

		// Check if array is empty
		if (json.length === 0) {
			message = "No trips exist in our database!";
		}

		res.render("travel", {
			title: "Travlr Getaways",
			trips: json,
			message
		});
	} catch (err) {
		console.error("Fetch error:", err);
		res.status(500).send(err.message);
	}
};

module.exports = {
	travel,
};
