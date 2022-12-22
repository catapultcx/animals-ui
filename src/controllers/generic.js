import { config } from 'dotenv'
config()

import Generic from '../services/generic.js'
const generic = new Generic(process.env.API_URL)

export function all (req, res) {
  cats
    .all()
    .then((data) => { res.render('generic', { generic: data }) })
}

export function get (req, res) {
  generic
    .get(req.params.id)
    .then((data) => { res.render('view-generic', { generic: data }) })
}

export function addPage (req, res) {
  res.render('add-generic')
}

export function add (req, res) {
  generic
    .create(req.body)
    .then(() => { res.redirect('/generic') })
}

export function remove (req, res) {
  generic
      .remove(req.params.id)
      .then((data) => { res.render('view-generic', { generic: data }) })
}
