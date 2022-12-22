import { config } from 'dotenv'
config()

import Cats from '../services/cats.js'
const cats = new Cats(process.env.API_URL)

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

export function remove (req, res) {
  alert("here we are in controllers")
  cats
      .remove(req.params.id)
      .then((data) => { res.render('view-cat', { cat: data }) })
}
