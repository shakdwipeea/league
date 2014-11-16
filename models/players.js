var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
  name: String,
  matches: Number,
  wins: Number,
  loses: Number,
  history: [String],
  titles: Number
});

mongoose.model('Players',PlayerSchema);
