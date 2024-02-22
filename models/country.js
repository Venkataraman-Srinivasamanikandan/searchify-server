const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var countryschema = new Schema({
	"name": {
		type: String,
		required: true,
		trim: true,
	},
	"country_code": {
		type: String,
		required: true,
		trim: true,
	},
	"description": {
		type: String,
		default: "",
		trim: true
	},
},
	{ timestamps: true }
);

module.exports = mongoose.model('country', countryschema, 'country');
