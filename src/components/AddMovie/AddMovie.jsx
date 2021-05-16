import './AddMovie.css';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'



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
// function to do a thing with input/selector fields
   const handleSubmit = () => {
       // send local state inputs/selector fields to AddMovie reducer (NOT DONE)
       dispatch()

       // will want to clear input fields on submit
       setTitle('');
       setUrl('');
       setDescription('');
       setSelectGenre('');

   }

    return (
        <>
            <header>
                <h1> Add New Movie </h1>
            </header>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Movie Title" value={title} />
                <br />
                <br />
                <input type="text" placeholder="Poster Image URL" value={url} />
                <br />
                <br />
                <input type="text" placeholder="Description" value={description} />
                <br />
                <br />
                <select> SELECT GENRE
                {genresReducer.map((genres, id) =>
                    <option key={id} value={selectGenre}> {genres.name} </option>
                )}
                </select>
                {/* <div className="dropdown">
                    <button className="dropbtn">Hover to Select Movie Genre</button>
                    <div className="dropdown-content">
                        {genresReducer.map((item, i) =>
                            <option key={i}> {item.name} </option>
                        )}
                    </div>
                </div> */}
            </form>
        </>
    )
}

export default AddMovie;
