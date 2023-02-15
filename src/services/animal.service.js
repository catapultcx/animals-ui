import WebService from "./web.service.js";

class AnimalService extends WebService {
  constructor(url) {
    super(`${url}/animals`);
  }
}

export default AnimalService;
