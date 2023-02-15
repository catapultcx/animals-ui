import { config } from "dotenv";
import AnimalService from "../../src/services/animal.service";

config();
const service = new AnimalService(process.env.API_URL);
let created;

let item = {
  name: "Tom",
  description: "Friend of Jerry",
  colour: "red",
  type: "mammals",
};

describe("animals", function () {
  it("create a animal", function () {
    return service.create(item).then((data) => {
      expect(data.name).toEqual(item.name);
      expect(data.description).toEqual(item.description);
      expect(data.colour).toEqual(item.colour);
      expect(data.type.toLowerCase()).toEqual(item.type);
      expect(data.id).toBeDefined();

      created = data;
    });
  });

  it("get a created animal", function () {
    return service.get(created.id).then((data) => {
      expect(data.name).toEqual(item.name);
      expect(data.description).toEqual(item.description);
      expect(data.colour).toEqual(item.colour);
      expect(data.type.toLowerCase()).toEqual(item.type);
      expect(data.id).toBeDefined();
    });
  });

  it("update a created animal", async function () {
    const updatedAnimal = {
      ...created,
      name: "updated-name",
      description: "updated-desc",
      colour: "updated-colour",
      type: "fish",
    };
    return service.update(updatedAnimal).then((data) => {
      expect(data.name).toEqual(updatedAnimal.name);
      expect(data.description).toEqual(updatedAnimal.description);
      expect(data.colour).toEqual(updatedAnimal.colour);
      expect(data.type.toLowerCase()).toEqual(updatedAnimal.type);
      expect(data.id).toEqual(updatedAnimal.id);
    });
  });

  it("delete a created animal", async function () {
    return service.delete(created.id).then((data) => {
      expect(data.res.statusCode).toEqual(200);
    });
  });

  it("get all animals", function () {
    return service.all().then((data) => {
      expect(data.length).toBeGreaterThan(0);
    });
  });
});
