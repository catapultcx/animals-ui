const WebService = require('./webservice')

class Insects extends WebService {
  constructor (url) {
    super(`${url}/insects`)
  }

  delete(id) {
    return this.agent.delete(`${this.url}/${id}`);
  }

}

module.exports = Insects