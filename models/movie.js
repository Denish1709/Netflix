const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  release_year: {
    type: Number,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
});

const Movie = model("Movie", movieSchema);
module.exports = Movie;
