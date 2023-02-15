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

  it("search animals by name", async () => {
    await createAnimals();
    const resultsByName = await service.all({ name: "animal 1" });
    expect(resultsByName.length).toEqual(1);

    const resultsByDesc = await service.all({ description: "desc 2" });
    expect(resultsByDesc.length).toEqual(1);

    const resultsByColour = await service.all({ colour: "orange" });
    expect(resultsByColour.length).toEqual(2);

    const resultsByType = await service.all({ type: "amphibian" });
    expect(resultsByType.length).toEqual(2);
  });
});

async function createAnimals() {
  const existingAnimals = await service.all();
  for (const ea of existingAnimals) {
    await service.delete(ea.id);
  }

  const animals = [
    {
      name: "animal 1",
      description: "desc 1",
      colour: "red",
      type: "amphibian",
    },
    { name: "animal 2", description: "desc 2", colour: "green", type: "bird" },
    { name: "animal 3", description: "desc 3", colour: "yellow", type: "fish" },
    {
      name: "animal 4",
      description: "desc 4",
      colour: "orange",
      type: "invertebrate",
    },
    {
      name: "animal 5",
      description: "desc 5",
      colour: "pink",
      type: "mammals",
    },
    {
      name: "animal 6",
      description: "desc 6",
      colour: "orange",
      type: "reptiles",
    },
    {
      name: "animal 7",
      description: "desc 7",
      colour: "red",
      type: "amphibian",
    },
  ];
  for (const animal of animals) {
    await service.create(animal);
  }
}
