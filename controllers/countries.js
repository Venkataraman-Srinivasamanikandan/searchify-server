const mongoose = require("mongoose");

const country = mongoose.model('country');

module.exports = {
	searchCountries: async (req, res) => {
		try {
			const { name } = req.params
			const countries = await country.find({ name: { $regex: name, $options: 'i' } })
			if (countries.length === 0) {
				return res.status(404).send('Country not found');
			}
			return res.json(countries);
		}
		catch (e) {
			console.log(e)
			return res.status(500).send('Internal server error');
		}
	}
}