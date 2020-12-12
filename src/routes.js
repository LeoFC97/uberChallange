const express = require('express');

const routes = new express.Router();
const health = require('./health');
const mail = require('./controllers/mail');

routes.get('/test', (req, res) => res.status(200).send({ ok: true }));
routes.get('/health', health.checkHealth);
routes.post('/sendMail', mail.sendMail);

module.exports = routes;
