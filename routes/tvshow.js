const express = require("express");
const router = express.Router();

const Tvshow = require("../models/tvshow");

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
  const movieslist = await Tvshow.find(filter);
  res.send(movieslist);
});

router.get("/:id", async (req, res) => {
  const findtvshow = await Tvshow.findOne({ _id: req.params.id });
  res.send(findtvshow);
});

/* create new movie route */
router.post("/", async (req, res) => {
  // create a placeholder for a new tvshow
  const newTvshow = new Tvshow({
    title: req.body.title,
    creator: req.body.creator,
    premiere_year: req.body.premiere_year,
    end_year: req.body.end_year,
    season: req.body.season,
    genre: req.body.genre,
    rating: req.body.rating,
  });

  await newTvshow.save();
  res.send(newTvshow);
});

/* update a movie */
router.put("/:id", async (req, res) => {
  const tvshow_id = req.params.id;
  const updateTvshow = await Tvshow.findByIdAndUpdate(tvshow_id, req.body, {
    new: true,
  });
  res.send(updateTvshow);
});

/* delete a movie */
router.delete("/:id", async (req, res) => {
  const tvshow_id = req.params.id;
  const deletedTvshow = await Tvshow.findByIdAndDelete(tvshow_id);
  res.send(deletedTvshow);
});

module.exports = router;
