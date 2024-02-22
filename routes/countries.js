const express = require('express'),
	api = express.Router();

const controllers = require('../controllers/index'),
	authorization = require("../middleware/authentication");

api.get("/search/:name", authorization.headerAuthentication, controllers.countries.searchCountries)

module.exports = api;