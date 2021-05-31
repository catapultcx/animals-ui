const WebService = require('./webservice')

class Insects extends WebService {
  constructor (url) {
    super(`${url}/insects`)
  }
}

module.exports = Insects