const WebService = require('./webservice')

class Horses extends WebService {
  constructor (url) {
    super(`${url}/horses`)
  }
}

module.exports = Horses
