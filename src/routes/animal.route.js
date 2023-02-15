import express from "express";
import {
  add,
  addPage,
  all,
  deleteAnimal,
  get,
  updatePage,
  update,
} from "../controllers/animal.controller.js";

const router = new express.Router();
router.get("/", all);
router.get("/add", addPage);
router.get("/:id", get);
router.post("/", add);
router.get("/:id/update", updatePage);
router.post("/:id/update", update);
router.get("/:id/delete", deleteAnimal);

export default router;
