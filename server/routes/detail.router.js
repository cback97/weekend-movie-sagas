const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all movie data
  const query = `SELECT * FROM movies ORDER BY id`;
  pool.query(query)
    .then( result => {
      console.log(result.data);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all details', err);
      res.sendStatus(500)
    })
});

module.exports = router;