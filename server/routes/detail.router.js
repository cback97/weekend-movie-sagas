const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all movie data
  const query = 
  `SELECT title, poster, description, name as genre_name FROM movies_genres
  JOIN movies ON movies.id = movies_genres.movie_id
  JOIN genres ON genres.id = movies_genres.genre_id
  WHERE movies.id = ${req.params.id}
  `;
  pool.query(query, [req.params.id])
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