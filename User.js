// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  religion: String,
  profession: String,
  location: String,
  interests: [String],
  about: String,
});

module.exports = mongoose.model('User', userSchema);
