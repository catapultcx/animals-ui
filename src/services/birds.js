const WebService = require('./webservice')

class Cats extends WebService {
  constructor (url) {
    super(`${url}/birds`)
  }
}

module.exports = Birds