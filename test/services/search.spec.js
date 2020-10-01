require('dotenv').config();
require('should');

const Search = require('../../src/services/search');
const service = new Search(process.env.API_URL);

describe('search', function () {
  it('search', function () {
    return service.search('abc').then((data) => {
      data.should.be.instanceof(Array);
    });
  });
});
