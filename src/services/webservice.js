class WebService {
  constructor (url) {
    this.url = url
    this.agent = require('superagent')
  }

  all () {
    return this.agent.get(this.url).then((data) => {
      return data.body
    })
  }

  get (id) {
    return this.agent.get(`${this.url}/${id}`).then((data) => {
      return data.body
    })
  }

  create (item) {
    return this.agent.post(this.url).send(item).then((data) => {
      return data.body
    })
  }

  del (id) {
    return this.agent.del(`${this.url}/${id}`)
  }
}

module.exports = WebService
