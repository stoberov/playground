const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SuperheroSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Superhero', SuperheroSchema);
