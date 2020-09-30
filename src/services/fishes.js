const WebService = require('./webservice')

class Fishes extends WebService {
  constructor (url) {
    super(`${url}/fishes`)
  }
}

module.exports = Fishes