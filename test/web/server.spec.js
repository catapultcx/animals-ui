require('should');

const http = require('http');
const Http = require('../http.js');
const web = new Http();
const url = 'http://localhost:2999';
const fs = require('fs');
const decache = require('decache');

let server;
let app;

function startServer(done) {
    let port = process.env.PORT || '2999';
    app = require("../../src/app");
    decache("../../src/app");
    app.set("port", port);
    server = http.createServer(app);
    server.listen(port);
    server.on('listening', done);
    server.on('error', (error) => {
        console.log(error);
    });
}

describe('/', function () {

    beforeEach('Setup', function (done) {
        startServer(done);
    });

    it('should load homepage', function () {
        return web.get(url + '/').then(data => {
            data.includes("Welcome to the GOV.UK service").should.be.true();
        });
    });

    it('should load login', function () {
        return web.get(url + '/login').then(data => {
            data.includes("Sign in using Government Gateway").should.be.true();
        });
    });

    it('should load signup', function () {
        return web.get(url + '/signup').then(data => {
            data.includes("Sign up to Government Gateway").should.be.true();
        });
    });

    afterEach('Teardown', function () {
        console.log('Teardown');
        server.close();
        server = undefined;
        app = undefined;
    })
});
