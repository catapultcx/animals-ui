import { config } from "dotenv";
config();

import AnimalService from "../services/animal.service.js";
const service = new AnimalService(process.env.API_URL);

const TYPES = [
  "amphibian",
  "bird",
  "fish",
  "invertebrate",
  "mammals",
  "reptiles",
];

export function all(req, res, next) {
  service.all(req.query).then((data) => {
    res.render("animals", {
      types: TYPES,
      animals: data,
      filters: req.query,
    });
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
  res.render("upsert-animal", { types: TYPES, heading: "Add a Animal" });
}

export function add(req, res, next) {
  service.create(req.body).then(() => {
    res.redirect("/animals");
  });
}

export function updatePage(req, res, next) {
  service
    .get(req.params.id)
    .then((data) => {
      res.render("upsert-animal", {
        types: TYPES,
        heading: "Update Animal",
        animal: data,
      });
    })
    .catch((error) => {
      next(error);
    });
}

export function update(req, res, next) {
  service
    .update({ ...req.body, id: req.params.id })
    .then(() => {
      res.redirect("/animals");
    })
    .catch((error) => {
      next(error);
    });
}

export function deleteAnimal(req, res, next) {
  service
    .delete(req.params.id)
    .then(() => {
      res.redirect("/animals");
    })
    .catch((error) => {
      next(error);
    });
}
