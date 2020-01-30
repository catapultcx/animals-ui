'use strict';
const express = require('express');
const fs = require('fs');
const path = require("path");
const app = express();
const route = require("./routes/route");
const govkukFrontendPath = require.resolve('govuk-frontend/package.json')
const nunjucks = require("nunjucks");

nunjucks.configure([
        path.join(__dirname, "views"),
        path.join(govkukFrontendPath, '../govuk'),
        path.join(govkukFrontendPath, '../govuk/components'),],
    {autoescape: true, express: app});

app.set("view engine", "html");

app.use('/assets', express.static(
    path.join(govkukFrontendPath, '../govuk/assets')))
app.use('/assets/js/all.js', express.static(
    path.join(govkukFrontendPath, '../govuk/all.js')))
app.use('/public', express.static(path.join(__dirname, '../public')))

app.use("/", route);


module.exports = app;
