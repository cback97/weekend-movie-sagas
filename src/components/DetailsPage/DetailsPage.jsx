import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import './DetailsPage.css'

function DetailsPage() {

    const detailsReducer = useSelector(store => store.movieData)
    const history = useHistory();
    const dispatch = useDispatch();
    
    const handleClick = () => {
     history.push(`/`)
    }
    useEffect(() => {
        dispatch({ type: 'GET_DETAILS' });
    }, []);

    return (
<>
<header>
    <h1>Selected Film Details</h1>
</header>
{detailsReducer.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h2>{movie.title}</h2>
                            <h3>Genres</h3>
                            <ul>{movie.genre_name.map(name => <li key={name}> {name} </li>)}</ul>
                            <br />
                            <br />
                            <h3>Description</h3>
                            <p>{movie.description}</p>
                            <h4>{movie.name}</h4>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
<button onClick={handleClick}>Back to Home Page</button>
</>
    )
}

export default DetailsPage;