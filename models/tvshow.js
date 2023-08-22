const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tvshowSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  creator: {
    type: String,
    require: true,
  },
  premiere_year: {
    type: Number,
    require: true,
  },
  end_year: {
    type: Number,
  },
  season: {
    type: String,
    require: true,
  },
  genre: {
    type: [String], //Array
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
});

const Tvshow = model("Tvshow", tvshowSchema);
module.exports = Tvshow;
