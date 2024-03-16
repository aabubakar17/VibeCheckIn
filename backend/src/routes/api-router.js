const apiRouter = require("express").Router();
const accommodations = [
  { id: 1, name: "Hotel Relax", location: "City Center" },
  { id: 2, name: "Mountain Retreat", location: "Highlands" },
];
const Accommodation = require("../models/Accommodation");

apiRouter.get("/accommodations", (req, res) => {
  res.json(accommodations);
});

apiRouter.post("/accommodations", async (req, res) => {
  try {
    const newAccommodation = new Accommodation(req.body);
    await newAccommodation.save();
    res.status(201).send(newAccommodation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = apiRouter;
