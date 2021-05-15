import './AddMovie.css';

function AddMovie() {

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
                <div className="dropdown">
                    <button className="dropbtn">Hover to Select Movie Genre</button>
                    <div className="dropdown-content">
                        <a href="#">Adventure </a>
                        <a href="#">Animated </a>
                        <a href="#">Biographical </a>
                        <a href="#">Comedy </a>
                        <a href="#">Disaster </a>
                        <a href="#">Drama </a>
                        <a href="#">Epic </a>
                        <a href="#">Fantasy </a>
                        <a href="#">MusicalMusical </a>
                        <a href="#">Romantic </a>
                        <a href="#">Science Fiction </a>
                        <a href="#">Space-Opera </a>
                        <a href="#">Superhero </a>
                        <option value=""></option>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddMovie;