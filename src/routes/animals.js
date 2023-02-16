import {animalControllerBuilder} from "../controllers/animals.js";
import express from "express";

export const animalRouteBuilder = (type) => {
    const router = new express.Router()
    const controller = animalControllerBuilder(type);
    router.get('/', controller.all)
    router.get('/add', controller.addPage)
    router.get('/:id', controller.get)
    router.post('/', controller.add)
    return router;
}
