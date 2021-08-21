const WebService = require('./webservice');

class Birds extends WebService {
  constructor (url) {
    super(`${url}/birds`)
  }
}

module.exports = Birds;
