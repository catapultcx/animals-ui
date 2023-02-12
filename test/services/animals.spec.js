import {config} from 'dotenv'
import Animals from '../../src/services/animals.js'
import superagent from 'superagent';
import mockSuperagent from 'superagent-mock';

describe('Animals Service', function () {
  config();
  const UUID = "UUID";
  const service = new Animals(process.env.API_URL);
  const initialAnimal = {
    name: 'MockedAnimalName',
    description: 'MockedAnimalDescription',
    color: 'MockedAnimalColor',
    type: 'MAMMALS'
  };
  const expectedAnimal = {
    id: UUID,
    name: initialAnimal.name,
    description: initialAnimal.description,
    color: initialAnimal.color,
    type: initialAnimal.type
  };

  let superagentMock;
  let actualParams;

  beforeEach(() => {
    superagentMock = mockSuperagent(superagent, [{
      pattern: `${process.env.API_URL}(.*)`, fixtures: (match, params) => {
        actualParams = params;
        return expectedAnimal;
      }, get: (match, data) => {
        if (match[1] === '/animals/' + UUID) {
          return {body: data};
        } else if (match[1] === '/animals') {
          return {body: [data]};
        }
      }, post: (match, data) => ({body: data}), put: (match, data) => ({body: data})
    }]);
  });

  afterEach(() => {
    superagentMock.unset();
  });

  it('should get all animals', function () {
    return service.all().then((data) => {
      expect(data.length).toEqual(1);
      expect(data[0]).toBeDefined();
      expect(data[0]).toEqual(expectedAnimal);
    })
  })

  it('should create an animal', function () {
    return service.create(initialAnimal).then((data) => {
      expect(actualParams).toBeDefined();
      expect(actualParams).toEqual(initialAnimal);
      expect(data).toEqual(expectedAnimal);
    })
  })

  it('should get an animal with id', function () {
    return service.get(expectedAnimal.id).then((data) => {
      expect(data).toEqual(expectedAnimal);
    })
  })

  it('should update an animal', function () {
    return service.update(initialAnimal).then((data) => {
      expect(actualParams).toBeDefined();
      expect(actualParams).toEqual(initialAnimal);
      expect(data).toEqual(expectedAnimal);
    })
  })

})
