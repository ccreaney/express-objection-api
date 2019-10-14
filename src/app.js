const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

// Middleware
const helloMiddleware = require('./middleware/helloMiddleware');
app.use(helloMiddleware);

// controllers
const routes = require('./controllers');
app.use('/', routes);

app.listen(port, () => {
	console.log('Listening on port: ' + port)
})
