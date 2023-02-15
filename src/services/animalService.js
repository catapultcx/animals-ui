import WebService from './webservice.js'
class AnimalService extends WebService {
  constructor(url, qualifier) {
    super(`${url}/${qualifier}`)
  }
}
export default AnimalService
