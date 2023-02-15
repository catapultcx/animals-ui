import { config } from "dotenv";
config();

import AnimalService from "../services/animal.service.js";
const service = new AnimalService(process.env.API_URL);

export function all(req, res) {
  service.all().then((data) => {
    res.render("animals", { animals: data });
  });
}

export function get(req, res, next) {
  service
    .get(req.params.id)
    .then((data) => {
      res.render("view-animal", { animal: data });
    })
    .catch((error) => {
      next(error);
    });
}

export function addPage(req, res) {
  res.render("add-animal");
}

export function add(req, res) {
  service.create(req.body).then(() => {
    res.redirect("/animals");
  });
}
