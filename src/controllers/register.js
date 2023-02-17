import {config} from 'dotenv'
import AnimalRootService from "../services/animals-service.js";

config()

const service = new AnimalRootService(process.env.API_URL)

export async function index(req, res) {
    const types = await service.types();
    const groups = await service.groups();
    res.render('register', {
        types,
        groups,
        error: req.query.error
    })
}

export function add(req, res) {
    service
        .register(req.body)
        .then(() => {
            res.redirect(`/animals`)
        })
        .catch((data) => {
            res.redirect("/register?error=" + data.status)
        })
}
