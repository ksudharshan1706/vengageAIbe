const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  start: Date,
  end: Date,
  title: String,
});

module.exports = mongoose.model("Event", EventSchema);
