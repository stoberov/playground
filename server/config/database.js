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

  // Log MongoDB conection error
  db.on('error', err => console.log(err));

  // Display a success message
  db.once('open', () => {
    console.log('MongoDB connected!');
  });
};

module.exports = setupDatabase;
