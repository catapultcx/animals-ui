import { config } from 'dotenv'
config()

import Animals from '../services/animals.js'
const animals = new Animals(process.env.API_URL)

export function all (req, res) {
  animals
    .all()
    .then((data) => { res.render('animals', { animals: data }) })
}

export function view (req, res) {
  animals
    .get(req.params.id)
    .then((data) => { res.render('view-animal', { animal: data }) })
}

export function addPage (req, res) {
  res.render('add-animal')
}

export function add (req, res) {
  animals
    .create(req.body)
    .then(() => { res.redirect('/animals') })
}

export function updatePage (req, res) {
  animals
    .get(req.params.id)
    .then((data) => {
      res.render('update-animal', {animal: data})
    })
}

export function update (req, res) {
  req.body.id = req.params.id;
  animals
    .update(req.body)
    .then(() => {
      res.redirect('/animals')
    })
}

export function del (req, res) {
  animals
    .delete(req.params.id)
    .then(() => { res.redirect('/animals') })
}

export function filter (req, res) {
  let pathBuilder = '';
  new URL(process.env.API_URL + req.originalUrl).searchParams.forEach(function (value, key) {
    if(value) {
      pathBuilder += key.toLowerCase() + "=" + value;
    }
  });
  animals
    .filter(pathBuilder)
    .then((data) => { res.render('animals', { animals: data }) })
}

