const mongoose = require('mongoose');
const settings = require('./../config/settings');

const setupDatabase = () => {
  // Connect to MongoDB
  mongoose.connect(settings.MONGODB_URI, {
    useMongoClient: true
  });

  // Set the default promise library
  mongoose.Promise = global.Promise;

  // Get the default connection
  const db = mongoose.connection;

  // Log MongoDB conection errors
  db.on('error', err => console.log(err));
};

module.exports = setupDatabase;
