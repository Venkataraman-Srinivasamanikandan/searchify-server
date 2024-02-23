const mongoose = require("mongoose");

const attraction = mongoose.model('attraction');

module.exports = {
	getAttractions: async (req, res) => {
		try {
			const { country_id } = req.params
			if (!mongoose.mongo.ObjectId.isValid(country_id)) {
				return res.status(400).send('Invalid country id');
			}
			const attractions = await attraction.find({ country_id }).sort({ title: 1 })
			if (attractions.length === 0) {
				return res.status(404).send('Country not found');
			}
			return res.json(attractions);
		}
		catch (e) {
			return res.status(500).send('Internal server error');
		}
	}
}