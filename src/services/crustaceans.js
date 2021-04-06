const WebService = require('./webservice')

class Crustaceans extends WebService {
  constructor (url) {
    super(`${url}/crustaceans`)
  }
}

module.exports = Crustaceans