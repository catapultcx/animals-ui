import WebService from './webservice.js'

class Cats extends WebService {
  constructor (url) {
    super(`${url}/cats`)
  }
}

export default Cats
