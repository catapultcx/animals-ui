import { config } from 'dotenv'
config()

import Animals from '../services/animals.js'
const animals = new Animals(process.env.API_URL)

export function all (req, res) {
    const filters = {};
    if (req.query.type) {
        filters.type = req.query.type;
    }

    if (req.query.name) {
        filters.name = req.query.name;
    }

    if (req.query.colour) {
        filters.colour = req.query.colour;
    }

    if (req.query.description) {
        filters.description = req.query.description;
    }

    animals
        .all(filters)
        .then((data) => { res.render('animals', { animals: data, filters }) })
}

export function get (req, res) {
    animals
        .get(req.params.id)
        .then((data) => { res.render('view-animal', { animal: data }) })
}

export function edit (req, res) {
    animals
        .get(req.params.id)
        .then((data) => { res.render('edit-animal', { animal: data }) })
}
export function addPage (req, res) {
    res.render('add-animal')
}

export function add (req, res) {
    animals
        .create(req.body)
        .then(() => { res.redirect('/animals') })
}

export function update(req, res) {
    animals
        .update(req.params.id, req.body)
        .then(() => {
            res.redirect('/animals') })
}

export function deleteAnimal (req, res) {
    animals
        .delete(req.params.id)
        .then(() => {
            res.redirect('/animals') })
}

