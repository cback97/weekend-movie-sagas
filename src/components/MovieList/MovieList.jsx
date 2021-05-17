import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useState} from 'react'

function MovieList() {
    //to store event.target.value from selected movie into local state
    const [movieID, selectedMovieID] = useState('')
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

  // function to select movie from page on click by id, and send particular movie.id to SAGA
  const movieSelector = () => {
   dispatch({type: 'GET_DETAILS', payload: movieID})
   history.push(`/MovieDetails/${movieID}`)
  };

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} value={movie.id} onClick={(event) => selectedMovieID(event.target.value)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;