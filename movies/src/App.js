import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';

//components
import MovieList from './Components/MovieList'
import MovieForm from './Components/MovieForm'
import UpdatedMovie from './Components/UpdateMovie'

function App(props) {
  const [movies, setMovies] = useState([]);
  useEffect(()=> {
    axios
    .get('http://localhost:5000/api/movies')
    .then(res => setMovies(res.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <Router>
    <div className="App">
      <Switch>
  <Route path= "/movie-list" render={props => (<MovieList {...props} movies={movies}/>)}
  />
      <Route exact path= "/add-movie" 
      render={props => (<MovieForm {...props} movies={movies}/>)}
       />
       <Route path="/edit-movie/:id" render={props => (<UpdatedMovie {...props} movies={movies} />)}
       />
      </Switch>
    </div>
    </Router> 
  );
}
export default App;
