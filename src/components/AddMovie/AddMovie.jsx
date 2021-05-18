// import './AddMovie.css';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';



function AddMovie() {

    // local state for input values in form
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [selectGenre, setSelectGenre] = useState('')

    // get genres reducer values for drop down menu selection
    const genresReducer = useSelector(store => store.genres)
    console.log(genresReducer);

    // pushing type and payload to reducer that will add movies to database (NOT DONE)
    const dispatch = useDispatch();

    // to be used for bringing user back to home page
    const history = useHistory();

    // function to do a thing with input/selector fields
    const handleSubmit = (event) => {
        // send local state inputs/selector fields to AddMovie reducer (NOT DONE)
        dispatch({ type: 'PUSH_MOVIES', payload: { title: title, poster: url, description: description, genre_id: selectGenre } })

        // will want to clear input fields on submit
        setTitle('');
        setUrl('');
        setDescription('');
        setSelectGenre('');
    }

    const handleClick = () => {
        // will want to clear input fields on click
        setTitle('');
        setUrl('');
        setDescription('');
        setSelectGenre('');
        // will bring user back to home page
        history.push('/')
    }

    useEffect(() => {
        dispatch({ type: 'GET_GENRES' });
    }, []);


    return (
        <>
            <header>
                <h1> Add New Movie </h1>
            </header>
            <form onSubmit={handleSubmit}>
                <input required type="text" placeholder="Movie Title" value={title} onChange={(event) => setTitle(event.target.value)} />
                <br />
                <br />
                <input required type="text" placeholder="Poster Image URL" value={url} onChange={(event) => setUrl(event.target.value)} />
                <br />
                <br />
                <label >Movie Description:</label>
                <textarea required rows="4" cols="35" value={description} onChange={(event) => setDescription(event.target.value)}>
                </textarea>
                {/* <input required type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} /> */}
                <br />
                <br />
                <select required name="SELECT GENRE" onChange={(event) => setSelectGenre(event.target.value)}>
                    <option>-- SELECT GENRE --</option>
                    {genresReducer.map((genre) => { return <option key={genre.id} value={genre.id}> {genre.name} </option> }
                    )}
                </select>
                <br />
                <br />
                <button type="submit"> Save New Movie </button>
                <button onClick={handleClick}> Cancel </button>
            </form>
        </>
    )
}

export default AddMovie;