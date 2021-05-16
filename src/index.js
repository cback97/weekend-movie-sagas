import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_GENRES', getAllGenres);
    yield takeEvery('PUSH_MOVIES', pushMovie);
}

// Get all movies from database
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

// Get genres from genres table
function* getAllGenres() {
    try {
        const genres = yield axios.get('/api/genre');
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch(error) {
        console.log('get all error', error);
    }

}

// Add new movie data from AddMovie to database 
function* pushMovie(action) {
    try {
        yield axios.post('/api/movie', action.payload);

    } catch (error) {
        alert(' sorry things are not working at the moment. Try again later');
        console.log('error adding book', error);
    }
}

// Add new movie data from AddMovie to database 
function* getDetails(action) {
    try {
        yield axios.post('/api/detail', action.payload);
        yield put({ type: 'ADD_MOVIE_DATA' });

    } catch (error) {
        alert(' sorry things are not working at the moment. Try again later');
        console.log('error adding book', error);
    }
}


// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to receive data from AddMovie component upon submission
const movieData = (state = [], action) =>{
    switch (action.type) {
        case 'ADD_MOVIE_DATA':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieData,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
