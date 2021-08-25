const WebService = require('./webservice')

class Dogs extends WebService {
  constructor (url) {
    super(`${url}/dogs`)
  }
}

module.exports = Dogs