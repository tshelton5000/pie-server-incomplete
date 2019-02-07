const express = require('express');
const router = express.Router();
const Pie = require('../db').import('../models/pie');

router.get('/', (req, res) => {
  Pie.findAll()
    .then(pies => res.status(200).json(pies))
    .catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
  if (!req.errors) {
    const pieFromRequest = {
      nameOfPie: req.body.nameOfPie,
      baseOfPie: req.body.baseOfPie,
      crust: req.body.crust,
      timeToBake: req.body.timeToBake,
      servings: req.body.servings,
      rating: req.body.rating
    }

    Pie.create(pieFromRequest)
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;