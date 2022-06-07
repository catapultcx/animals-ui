import { config } from 'dotenv'
config()

import Animals from '../services/animals.js'
export const animals = new Animals(process.env.API_URL)

export const all = (req, res) => {
  animals
    .all()
    .then((data) => { res.render('animals', { animals: data }) })
}

export const getAnimalTypes = (req, res) =>
  animals
    .allTypes()
    .catch(e => console.log('unable to retrieve animal types', e))

export const addPage = async (req, res) => {
  const animalTypes = await getAnimalTypes();
  console.log('animal types: ', animalTypes);

  res.render('add-animal', { animalTypes })
}

export function get(req, res) {
  animals
    .get(req.params.id)
    .then((data) => { res.render('view-animal', { animal: data }) })
}

export const add = (req, res) => {
  animals
    .create(req.body)
    .then(() => { res.redirect('/animals') })
}

export const del = (req, res) => {
  animals
    .del({ id: req.params.id })
    .then(() => { res.redirect('/animals') })
}
