const express = require("express");

const app = express();

const apiRouter = require("./routes/api-router");
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("VibeCheckIn Backend is running!");
});

module.exports = app;
