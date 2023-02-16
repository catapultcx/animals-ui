import { config } from 'dotenv'
config()

import AnimalService from '../services/animalService.js'

export const animalControllerBuilder = (type) => {
  const animalService = new AnimalService(process.env.API_URL, `${type}s`)
  const name = type.charAt(0).toUpperCase() + type.slice(1);

  return({
    all: (req, res) => {
      animalService
          .all()
          .then((data) => { res.render('animals-with-type', { animals: data, name: name, type: type }) })
    },

    get: (req, res) => {
      animalService
          .get(req.params.id)
          .then((data) => { res.render('view-animal', { animal: data, name: name, type: type }) })
    },

    addPage: (req, res) => {
      res.render('add-animal', { name: name, type: type })
    },

    add: (req, res) => {
      animalService
          .create(req.body)
          .then(() => { res.redirect(`/${type}s`) })
    }
  })

}

