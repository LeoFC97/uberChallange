const express = require('express');

const routes = new express.Router();
const health = require('./health');

routes.get('/test', (req, res) => res.status(200).send({ ok: true }));
routes.get('/health', health.checkHealth);

module.exports = routes;
