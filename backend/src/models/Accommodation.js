const mongoose = require("mongoose");

const accommodaionSchema = new mongoose.Schema({
  name: String,
  location: String,
  pricePerNight: Number,
});

const Accommodation = mongoose.model("Accommodation", accommodaionSchema);

module.exports = Accommodation;
