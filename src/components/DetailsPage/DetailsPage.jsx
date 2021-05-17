import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

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
                            <h3>{movie.title}</h3>
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