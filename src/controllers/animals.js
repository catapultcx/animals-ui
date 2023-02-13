import { config } from 'dotenv'
config()

import Animals from '../services/animals.js'
const animals = new Animals(process.env.API_URL)


export function all (req, res) {
  animals
    .all()
    .then((data) => { res.render('animals', { animals: data }) })
}

export function get (req, res) {
  animals
    .get(req.params.id)
    .then((data) => {
		res.render('view-animal', { animal: data })
	})
}

export function addPage (req, res) {
  res.render('add-animal')
}

export function editPage (req, res) {
	animals
		.get(req.params.id)
		.then((data) => {
  res.render('edit-animal',{ animal: data } ) });
}

// export function savePage (req, res) {
// 	animals
// 		.save(req.params.id)
// 		.then((data) => {
// 			res.render('edit-animal',{ animal: data } ) });
// }


export function deleteConfirmationPage (req, res) {

  res.render('delete-animal', { id: req.params.id})
}

export function deletePage (req, res) {
	if (req.body.delete === 'yes') {
		animals
		.delete(req.params.id)
		.then(() => {
			res.redirect('/animals')
		})
	} else {
		res.redirect('/animals')
	}

}

export function add (req, res) {
  animals
    .create(req.body)
    .then(() => { res.redirect('/animals') })
}

export function save (req, res) {
  animals
    .save(req.body)
    .then(() => { res.redirect('/animals') })
}
