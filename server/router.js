const express = require('express');
const proxyRouter = express.Router();
const mongoose = require('mongoose');
// const db = require('../database/model.js');
const path = require('path');


proxyRouter
  .route('/:roomid')
  .get((req, res, next) => {
    res.sendFile('index.html', {root: path.resolve('public')})

  })
  .options((req, res) => {
    res.sendStatus(200);
  });

// proxyRouter
//   .route('/api/:roomid/bookings')
//   .get((req, res, next) => {
//     db.findOne(req.params.roomid)
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((err) => {
//         console.log('there was an err in find one', err);
//         res.status(404).json(err);
//       });
//   }
//   );

module.exports = proxyRouter;


