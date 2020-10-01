const WebService = require('./webservice')

class Search extends WebService {
  constructor (url) {
    super(`${url}/search`)
  }
}

module.exports = Search