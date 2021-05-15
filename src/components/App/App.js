import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import AddMovie from '../AddMovie/AddMovie';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>    
      <nav>
                    <ul>
                        <li>
                            <Link to = "/">Home</Link>
                        </li>
                        <li>
                            <Link to = "/AddMovie">AddMovie</Link>
                        </li>
                    </ul>
                </nav>    
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}

        <Route path="/AddMovie">
          <AddMovie />
        </Route>
      
      </Router>
    </div>
  );
}


export default App;
