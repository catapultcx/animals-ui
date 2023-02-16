import superagent from 'superagent'

class AnimalFilterService {
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

}

export default AnimalFilterService
