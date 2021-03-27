const app = require("../app");

const request = require("supertest");

describe("simple tests", () => {
  describe("Parse snnm.net", () => {
    it("should get 200", (done) => {
      request(app).get("/parse?url=https://www.snnm.net/").expect(200, done);
    });

    it("invalid url", (done) => {
      request(app).get("/parse?url=foo.com").expect(400, done);
    });
  });
});
