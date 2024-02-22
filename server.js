require('dotenv').config();

require("./models/db");
const port = process.env.PORT;

const express = require('express'),
	cors = require('cors'),
	http = require('http');

(swaggerJsDoc = require('swagger-jsdoc')),
	(swaggerUi = require('swagger-ui-express'));

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		servers: [{
			url: 'http://localhost:3200/api/v1/',
			description: "Searchify"
		}],
		info: {
			title: "Flydubai Searchify",
			description: "A simple app with search bar, use word 'swagger' for authentication",
			version: "1.0.0",
			contact: {
				name: "Venkataraman S",
				email: "aravindram.aravind@gmail.com"
			}
		},
		host: 'http://localhost:3000',
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT'
				}
			}
		},
		security: [{
			bearerAuth: []
		}]
	},
	apis: ["./swaggerDoc/*js"]
}
const swaggerSpecification = swaggerJsDoc(swaggerOptions)

const app = express();

// view engine setup
app.use(cors());

const country = require('./routes/countries');
const attraction = require('./routes/attractions');

app.use('/api/v1/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecification));
app.use('/api/v1/country', country);
app.use('/api/v1/attraction', attraction);

var server = http.createServer(app);

server.listen(port, () => console.log(`Express server running on port ` + port));

// error handler
app.use(function (err, req, res, next) {
	return res.status(err.status || 500).send(err.message);
});

module.exports = server;


