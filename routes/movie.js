const express = require("express");
const router = express.Router();

// import model into router
const movie = require("../models/movies");

/* list all the movies */
router.get("/", async (req, res) => {
  const { genre, rating, release_year } = req.query;
  let filter = {};

  /* old method */
  // if (req.query.genre) {
  //   movieslist = await movie.find({ genre: req.query.genre });
  // } else if (req.query.rating) {
  //   movieslist = await movie.find({ rating: { $gt: rating } });
  // } else if (release_year) {
  //   movieslist = await movie.find({ release_year: { $gt: release_year } });
  // } else {
  //   movieslist = await movie.find();
  // }

  /* better filtering method */
  if (genre || rating || release_year) {
    if (genre) {
      filter.genre = genre; // { genre: genre }
    }
    if (rating) {
      filter.rating = { $gt: rating }; // { rating: { $gt: rating } }
    }
    if (release_year) {
      filter.release_year = { $gt: release_year }; // { release_year: { $gt: release_year } }
    }
  }

  res.send(await movie.find(filter));
});

/* get specific movies by id */
router.get("/:id", async (req, res) => {
  // res.send("find one movie by id");
  // const id = req.params.id;
  const onemovie = await movie.findOne({ _id: req.params.id });
  res.send(onemovie);
});

module.exports = router;
