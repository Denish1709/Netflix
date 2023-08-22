const express = require("express");
const router = express.Router();

const tvshow = require("../models/tvshow");

router.get("/", async (req, res) => {
  const { premiere_year, genre, rating } = req.query;
  let filter = {};
  if (genre || rating || premiere_year) {
    if (genre) {
      filter.genre = { $in: genre.split(",") }; // { genre: { $in: genre } }
    }
    if (rating) {
      filter.rating = { $gt: rating }; // { rating: { $gt: rating } }
    }
    if (premiere_year) {
      filter.premiere_year = { $gt: premiere_year }; // { premiere_year: { $gt: release_year } }
    }
  }
  const movieslist = await tvshow.find(filter);
  res.send(movieslist);
});

router.get("/:id", async (req, res) => {
  const findtvshow = await tvshow.findOne({ _id: req.params.id });
  res.send(findtvshow);
});

module.exports = router;
