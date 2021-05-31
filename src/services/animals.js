const WebService = require('./webservice')

class Animals extends WebService {
  constructor (url) {
    super(`${url}/animals`)
  }


  results(keyword) {
    console.log(`${this.url}/results?keyword=${keyword}`);

    //return this.agent.get(`${this.url}/results?keyword=${keyword}`);
    return [ {name: "joe", description: "tolpuddle", type: "insect", id:"9348390483ldasdkasd"}];
  }

}

module.exports = Animals