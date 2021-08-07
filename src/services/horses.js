const WebService = require('./webservice')

class Cats extends WebService {
  constructor (url) {
    super(`${url}/cats`)
  }
}

module.exports = Cats