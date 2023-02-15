import express from "express";
import {
  add,
  addPage,
  all,
  deleteAnimal,
  get,
} from "../controllers/animal.controller.js";

const router = new express.Router();
router.get("/", all);
router.get("/add", addPage);
router.get("/:id", get);
router.post("/", add);
router.get("/:id/delete", deleteAnimal);

export default router;
