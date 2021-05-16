import './AddMovie.css';
import { useSelector } from 'react-redux'
import {useState} from 'react'



function AddMovie() {
    
    // local state for input values in form
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [selectGenre, setSelectGenre] = useState('')

    const genresReducer = useSelector(store => store.genres)
    console.log(genresReducer);

    return (
        <>
            <header>
                <h1> Add New Movie </h1>
            </header>
            <form>
                <input type="text" placeholder="Movie Title" />
                <br />
                <br />
                <input type="text" placeholder="Poster Image URL" />
                <br />
                <br />
                <input type="text" placeholder="Description" />
                <br />
                <br />
                <select> SELECT GENRE
                {genresReducer.map((genres) =>
                            <option key={genres.id}> {genres.name} </option>
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
