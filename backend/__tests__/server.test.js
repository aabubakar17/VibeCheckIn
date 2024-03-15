const app = require("../src/server");
const request = require("supertest");
const mongoose = require("../src/db");

afterAll(() => {
  return mongoose.disconnect();
});

describe("server", () => {
  describe("/", () => {
    test("responds with a 200", () => {
      return request(app).get("/").expect(200);
    });

    test("responds with a message", () => {
      return request(app)
        .get("/")
        .then(({ text }) => {
          expect(text).toBe("VibeCheckIn Backend is running!");
        });
    });
  });

  describe("GET /api/accommodations", () => {
    test("responds with a 200 status code", () => {
      return request(app).get("/api/accommodations").expect(200);
    });

    test("responds with a message", () => {
      return request(app)
        .get("/api/accommodations")
        .then(({ body }) => {
          expect(body).toEqual([
            { id: 1, name: "Hotel Relax", location: "City Center" },
            { id: 2, name: "Mountain Retreat", location: "Highlands" },
          ]);
        });
    });
  });

  describe("POST /api/accommodations", () => {
    const postAccommodation = {
      name: "Hotel Relax",
      location: "City Center",
      pricePerNight: 50,
    };
    test("responds with a posted accomodation and 201 status code", () => {
      return request(app)
        .post("/api/accommodations")
        .send(postAccommodation)
        .then(({ body }) => {
          expect(body.name).toEqual("Hotel Relax");
          expect(body.location).toEqual("City Center");
          expect(body.pricePerNight).toEqual(50);
        });
    });
  });
});
