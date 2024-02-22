const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var attractionschema = new Schema({
	"country_id": {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'country',
	},
	"title": {
		type: String,
		required: true,
		trim: true,
	},
	"description": {
		type: String,
		default: "",
		trim: true
	},
	"image": {
		type: String,
		default: ""
	},
},
	{ timestamps: true }
);

module.exports = mongoose.model('attraction', attractionschema, 'attraction');
