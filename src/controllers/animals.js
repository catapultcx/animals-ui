import { config } from 'dotenv'
config()

import Animals from '../services/animals.js'
const animals = new Animals("http://localhost:8080/api/1")

export function all (req, res) {
  animals
    .all()
    .then((data) => { res.render('animals/animals', { animals: data }) })
}

export function get (req, res) {
  animals
    .get(req.params.id)
    .then((data) => { res.render('animals/view-animal', { animal: data }) })
}

export function addPage (req, res) {
  res.render('animals/add-animal')
}

export function add (req, res) {
  animals
    .create(req.body)
    .then(() => { res.redirect('/animals') })
}

export function remove (req, res) {
  animals
    .delete(req.params.id)
    .then(() => { res.redirect('/animals') })
}


