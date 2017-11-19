const api = require('./api');
const path = require('path');

const compression = require('compression');
const bodyParser = require('body-parser');
const favicon = require('express-favicon');
const express = require('express');

const settings = require('./config/settings');
const setupDatabase = require('./config/database');
const logger = require('./config/logger');

// Create Express server
const app = express();

// Connect to MongoDB
setupDatabase();

// Add favicon
app.use(favicon(path.resolve(__dirname, '/public/favicon.png')));

// Configure logger (Morgan)
app.use(logger());

// Configure app to pull POST content from HTTP requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Compress all responses
app.use(compression());

// Register API routes
app.use('/api', api);

// Serve static assets (React app)
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Start Express Server
app.listen(settings.PORT, () => {
  console.log(`Server is listening on port ${settings.PORT}`);
});
