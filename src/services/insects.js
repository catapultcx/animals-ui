const WebService = require('./webservice')

class Insects extends WebService {
  constructor (url) {
    super(`${url}/insects`)
  }

  delete(id) {
    return this.agent.delete(`${this.url}/${id}`);
  }

  update(id, item) {
    return this.agent.put(`${this.url}/${id}`).send(item).then((data) => {
      return data.body
    });
  }
}

module.exports = Insects