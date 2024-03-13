const apiRouter = require("express").Router();
const accommodations = [
  { id: 1, name: "Hotel Relax", location: "City Center" },
  { id: 2, name: "Mountain Retreat", location: "Highlands" },
];

apiRouter.get("/accommodations", (req, res) => {
  res.json(accommodations);
});

module.exports = apiRouter;
