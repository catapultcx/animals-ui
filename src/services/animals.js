const WebService = require('./webservice')

class Animals extends WebService {
  constructor (url) {
    super(`${url}/animals`)
  }


  results(keyword) {
    return this.agent.get(`${this.url}/results?keyword=${keyword}`);
  }

}

module.exports = Animals