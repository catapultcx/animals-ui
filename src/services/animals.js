import WebService from './webservice.js'

class Animals extends WebService {
  constructor (url) {
    super(`${url}/animals`)
  }
}

export default Animals
