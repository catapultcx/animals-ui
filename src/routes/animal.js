import {animalControllerBuilder} from "../controllers/animal.js";
import express from "express";

const router = new express.Router()

/**
 * I know this is ugly but after dynamic type
 * registration to provide these endpoints
 * I could not find a better solution :)
 */
router.use((req, res) => {
    const variables = req.path.split("/");
    const type = variables[1];
    const controller = animalControllerBuilder(type);
    const pathLength = variables.length;
    if (pathLength === 2) {
        if (req.method === "GET")
            controller.all(req, res);
        else
            controller.add(req, res)
    } else if (pathLength === 3) {
        if(variables[2] === "add") {
            controller.addPage(req, res)
        } else {
            req.params.id = variables[2]
            controller.get(req, res)
        }
    } else if (pathLength === 4 && variables[3] === "delete") {
        req.params.id = variables[2]
        controller.delete(req, res)
    } else {
        res.status(404)
        res.render('errors/404', { url: req.url });
    }
})

export default router;
