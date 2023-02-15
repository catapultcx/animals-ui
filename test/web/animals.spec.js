import { config } from "dotenv";
import request from "supertest";
import AnimalService from "../../src/services/animal.service";
import app from "../../src/app";

config();
const service = new AnimalService(process.env.API_URL);

describe("/", function () {
  it("should get animals", function () {
    return request(app)
      .get("/animals")
      .expect(200)
      .then((data) => {
        expect(data.text).toContain("Animals");
      });
  });

  it("should get a animal", async () => {
    let item = {
      name: "Tom",
      description: "Friend of Jerry",
      colour: "red",
      type: "mammals",
    };
    const createdAnimal = await service.create(item);
    return request(app)
      .get("/animals/" + createdAnimal.id)
      .expect(200)
      .then((data) => {
        expect(data.text).toContain("Animal");
      });
  });

  it("should fail to get a animal", function () {
    return request(app)
      .get("/animals/123")
      .expect(400)
      .then((data) => {
        expect(data.text).toContain("Sorry, the service is unavailable");
      });
  });

  it("should get add animal page", function () {
    return request(app)
      .get("/animals/add")
      .expect(200)
      .then((data) => {
        expect(data.text).toContain("Add a Animal");
      });
  });

  it("should add a animal", function () {
    return request(app)
      .post("/animals")
      .expect(302)
      .send({ name: "Test animal", description: "Test description" });
  });
});
