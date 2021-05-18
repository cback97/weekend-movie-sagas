const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all movie data
  console.log(req.params.id);
  const query = 
 `SELECT title, poster, description, array_agg(name) as genre_name FROM movies_genres
  JOIN movies ON movies.id = movies_genres.movie_id
  JOIN genres ON genres.id = movies_genres.genre_id
  WHERE movies.id = ${req.params.id}
  GROUP BY  movies.title , movies.poster , movies.description;`;

  pool.query(query, )
    .then( result => {
      console.log('get movie data',result);
      console.log('this is the query:',query);
      res.send(result.rows);
      
    })
    .catch(err => {
      console.log('ERROR: Get all details', err);
      res.sendStatus(500)
    })
});

module.exports = router;