import { config } from 'dotenv'
import AnimalRootService from "../services/animals-service.js";
import {supportedAnimalTypes} from "../app-config.js";
config()

const service = new AnimalRootService(process.env.API_URL)

export function index(req, res) {
    service
        .filter(req.query)
        .then(
            (data) => {
                res.render('animals', {
                    animals: data,
                    name: "Animals",
                    types: supportedAnimalTypes
                })
            })
}
