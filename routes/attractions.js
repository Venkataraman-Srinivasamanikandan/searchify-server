const express = require('express'),
	api = express.Router();

const controllers = require('../controllers/index'),
	authorization = require("../middleware/authentication");

api.get('/:country_id', authorization.headerAuthentication, controllers.attractions.getAttractions)

module.exports = api;