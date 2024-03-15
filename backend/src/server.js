const express = require("express");
const mongoose = require("./db");
const app = express();
app.use(express.json());
const apiRouter = require("./routes/api-router");
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("VibeCheckIn Backend is running!");
});

module.exports = app;
