import {supportedAnimalTypes} from "../app-config.js";

export function index (req, res) {
  res.status(200).render('index', {types: supportedAnimalTypes})
}

export function login (req, res) {
  res.status(404).send('Page not implemented yet')
}

export function signup (req, res) {
  res.status(404).send('Page not implemented yet')
}
