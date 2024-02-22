// Bring Mongoose into the app
const mongoose = require('mongoose'),
	dbUrl = process.env.DB;

mongoose.Promise = global.Promise;

// Create the database connection
mongoose.connect(dbUrl)
	.then(() => console.log('connection successful'))
	.catch((err) => console.error(err));

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
	console.log('Mongoose default connection open to DATE ' + new Date());
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
	console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose default connection disconnected', new Date());
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});

require('./attraction');
require('./country');
