const apiRouter = require("express").Router();
const { queryLocation, searchAccommodations } = require("../utils/bookingApi");
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

apiRouter.get("/locations", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  try {
    const Locations = await queryLocation(query);
    console.log(Locations);
    const formattedLocations = Locations.map((Location) => ({
      name: Location.name,
      label: Location.label,
      dest_id: Location.dest_id,
    }));
    res.json(formattedLocations);
    console.log(formattedLocations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch locations" });
  }
});

apiRouter.get("/accommodations/search", async (req, res) => {
  const { destinationId, checkinDate, checkoutDate } = req.query;
  if (!destinationId || !checkinDate || !checkoutDate) {
    return res
      .status(400)
      .json({ message: "All query parameters are required" });
  }

  try {
    const accommodations = await searchAccommodations(
      destinationId,
      checkinDate,
      checkoutDate
    );
    res.json(accommodations);
    console.log(accommodations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch accommodations" });
  }
});

module.exports = apiRouter;
