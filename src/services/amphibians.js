const WebService = require('./webservice')

class Amphibians extends WebService {
    constructor (url) {
        super(`${url}/amphibians`)
    }
}

module.exports = Amphibians
