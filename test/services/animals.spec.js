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

      // data.name.should.eql(item.name)
      // data.description.should.eql(item.description)
      // data.should.have.property('id')
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

      // data.name.should.eql(data.name)
      // data.id.should.eql(data.id)
      // data.description.should.eql(data.description)
    });
  });

  it("get all animals", function () {
    return service.all().then((data) => {
      expect(data.length).toBeGreaterThan(0);
    });
  });
});
