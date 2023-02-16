import superagent from 'superagent'

class AnimalsService {
    constructor (url) {
        this.url = url
        this.agent = superagent
    }

    filter ({names, descriptions, colors, types}) {
        return this.agent
            .get(this.url + "/filter")
            .query({names, descriptions, colors, types})
            .then((data) => { return data.body })
    }

    register(type, group) {
        return this.agent
            .get(`${this.url}/register/${group}/${type}`)
            .then((response) => { return response.ok })
    }
}

export default AnimalsService
