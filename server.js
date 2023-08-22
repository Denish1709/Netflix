const express = require("express");
const mongoose = require("mongoose");

// create an instance of express
const app = express();

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/netflix")
  .then(() => console.log("MongoDB Connected...."))
  .catch((err) => console.log(err));

// routes
const tvshowRouter = require("./routes/tvshow");

app.use("/tvshows", tvshowRouter);

app.get("/", (req, res) => {
  res.send("<a href='/tvshows'>Tvshow</a>");
});

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
