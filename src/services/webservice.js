import superagent from 'superagent'

class WebService {
  constructor (url) {
    this.url = url
    this.agent = superagent
  }

  all () {
    return this.agent
      .get(this.url)
      .then((data) => { return data.body })
  }

  allTypes () {
    return this.agent
      .get(`${this.url}/types`)
      .then((data) => { return data.body })
  }

  get (id) {
    return this.agent
      .get(`${this.url}/${id}`)
      .then((data) => { return data.body })
  }

  create (item) {
    return this.agent
      .post(this.url)
      .send(item)
      .then((data) => { return data.body })
  }

  del(item) {
      return this.agent
      .del(`${this.url}/${item.id}`)
      .then((data) => {
        return data.body
      })
  }
}

export default WebService
