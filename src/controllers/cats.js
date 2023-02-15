import { config } from 'dotenv'
config()

import AnimalService from '../services/animalService.js'
const cats = new AnimalService(process.env.API_URL, "cats")

export function all (req, res) {
  cats
    .all()
    .then((data) => { res.render('cats', { cats: data }) })
}

export function get (req, res) {
  cats
    .get(req.params.id)
    .then((data) => { res.render('view-cat', { cat: data }) })
}

export function addPage (req, res) {
  res.render('add-cat')
}

export function add (req, res) {
  cats
    .create(req.body)
    .then(() => { res.redirect('/cats') })
}

