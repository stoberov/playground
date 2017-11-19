const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('express-favicon');
const compression = require('compression');
const path = require('path');

const settings = require('./config/settings');
const setupDatabase = require('./config/database');
const logger = require('./config/logger');

const api = require('./api');

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

// Enable parsing cookies from request headers
app.use(cookieParser());

// Compress all responses
app.use(compression());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  next();
});

// Register API routes
app.use('/api', api);

// Serve static assets (React app)
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Start Express Server
app.listen(settings.PORT, () => {
  console.log(`Server is listening on port ${settings.PORT}`);
});
