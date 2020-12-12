const express = require('express');

const routes = new express.Router();

routes.get('/test', (req, res) => {
  console.log('oi');
  return res.status(200).send({ ok: true });
});

module.exports = routes;
