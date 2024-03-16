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

  /* describe("GET /api/accommodations", () => {
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
  }); */

  /* describe("POST /api/accommodations", () => {
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
  }); */
});

/* describe("Location Query Endpoint", () => {
  describe("GET /api/locations?query={locationName}", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/locations?query=London");
      expect(response.statusCode).toBe(200);
    });

    test("should return an array of locations", async () => {
      const response = await request(app).get("/api/locations?query=London");
      expect(response.body).toBeInstanceOf(Array);
    });

    test("each location should contain a destinationId", async () => {
      const response = await request(app).get("/api/locations?query=London");
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty("dest_id");
    });

    test("It responds with 400 if the query parameter is missing", async () => {
      const response = await request(app).get(`/api/locations?query=`);
      expect(response.statusCode).toEqual(400);
      expect(response.body).toEqual({ message: "Query parameter is required" });
    });
  });
  test("It responds with an empty array for queries matching no locations", async () => {
    const query = "asldkfjasldkfj";
    const response = await request(app).get(`/api/locations?query=${query}`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([]);
  });
});
 */

/* describe("GET /api/accommodations/search", () => {
  test("responds with a 200 status code for valid request", async () => {
    const query = {
      destinationId: "-2601889",
      checkinDate: "2024-05-19",
      checkoutDate: "2024-05-20",
    };
    const response = await request(app)
      .get("/api/accommodations/search")
      .query(query);
    expect(response.statusCode).toBe(200);
  });
}); */

/* describe("GET /api/accommodations/:id/reviews", () => {
  test("responds with a 200 status code for valid accommodation ID", async () => {
    const accommodationId = "590840";
    const response = await request(app).get(
      `/api/accommodations/${accommodationId}/reviews`
    );
    expect(response.statusCode).toBe(200);
  });
}); */
