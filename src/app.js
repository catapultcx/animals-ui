"use strict";
import express from "express";
import nunjucks from "nunjucks";
import formData from "express-form-data";
import path from "path";
import animalRoutes from "./routes/animal.route.js";
import index from "./routes/index.js";
import { initialiseErrors } from "./errors.js";

const app = express();
const govkukFrontendPath = "node_modules/govuk-frontend";
nunjucks.configure(
  [
    path.join("./src/views"),
    path.join(govkukFrontendPath, "/govuk"),
    path.join(govkukFrontendPath, "/govuk/components"),
  ],
  { autoescape: true, express: app }
);

app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(formData.parse({}));
app.use(formData.union());

app.use(
  "/assets",
  express.static(path.join(govkukFrontendPath, "../govuk/assets"))
);
app.use(
  "/assets/js/all.js",
  express.static(path.join(govkukFrontendPath, "../govuk/all.js"))
);
app.use("/public", express.static(path.join("./public")));

app.use("/", index);
app.use("/animals", animalRoutes);

initialiseErrors(app);

export default app;
