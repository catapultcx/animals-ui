import { config } from 'dotenv'
config()

import Cats from '../services/cats.js'
const cats = new Cats(process.env.API_URL || "http://localhost:8080/api/1")

export function all (req, res) {
  cats
    .all()
    .then((data) => { res.render('cats/cats', { cats: data }) })
}

export function get (req, res) {
  cats
    .get(req.params.id)
    .then((data) => { res.render('cats/view-cat', { cat: data }) })
}

export function addPage (req, res) {
  res.render('cats/add-cat')
}

export function add (req, res) {
  cats
    .create(req.body)
    .then((data) => { res.redirect('/cats') })
}

