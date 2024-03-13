const app = require("../src/server");
const request = require("supertest");

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

  describe("/api/accommodations", () => {
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
});
