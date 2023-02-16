import {animalControllerBuilder} from "../controllers/animal.js";
import express from "express";

export const animalRouteBuilder = (type) => {
    const router = new express.Router()
    const controller = animalControllerBuilder(type);
    router.get('/', controller.all)
    router.get('/add', controller.addPage)
    router.get('/:id', controller.get)
    router.get('/:id/delete', controller.delete)
    router.post('/', controller.add)
    return router;
}
