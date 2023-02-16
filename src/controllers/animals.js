import {config} from 'dotenv'
import AnimalRootService from "../services/animals-service.js";
import AnimalService from "../services/animal-service.js";

config()

const service = new AnimalRootService(process.env.API_URL)

export function index(req, res) {
    service
        .filter(req.query)
        .then(
            (data) => {
                res.render('animals', {
                    animals: data
                })
            })
}


export async function addPage(req, res) {
    const types = await service.types()
    res.render('add-animal-without-type', {name: "Animal", types: types})
}

export function add(req, res) {
    const animalService = new AnimalService(process.env.API_URL, `${req.body.type}s`)
    animalService
        .create(req.body)
        .then(() => { res.redirect("/animals") })
}
