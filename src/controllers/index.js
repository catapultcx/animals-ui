import AnimalsService from "../services/animals-service.js";
import {config} from "dotenv";

config()
const service = new AnimalsService(process.env.API_URL)

export async function index (req, res) {
  const types = await service.types();
  res.status(200).render('index', {types: types})
}

export function login (req, res) {
  res.status(404).send('Page not implemented yet')
}

export function signup (req, res) {
  res.status(404).send('Page not implemented yet')
}
