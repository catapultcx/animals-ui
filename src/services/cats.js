const WebService = require('./webservice')

class Cats extends WebService {
  constructor (url) {
    console.log("Creating using url base", url);
    super(`${url}/cats`)
  }

}

module.exports = Cats