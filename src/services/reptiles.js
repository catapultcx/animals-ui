const WebService = require('./webservice')

class Reptiles extends WebService {
  constructor (url) {
    super(`${url}/reptiles`)
  }
}

module.exports = Reptiles