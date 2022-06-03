const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  name: String,
  country: String,
  email: String,
  ratings: Array,
});

module.exports = mongoose.model("Survey", surveySchema);
