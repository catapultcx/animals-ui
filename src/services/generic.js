import WebService from './webservice.js'

class Generic extends WebService {
  constructor (url) {
    super(`${url}/generic`)
  }
}

export default Generic
