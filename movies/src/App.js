import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';

//components
import MovieList from './Components/MovieList'
import Movie from './Components/Movie'
import MovieForm from './Components/MovieForm'
import UpdatedMovie from './Components/UpdateMovie'

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(()=> {
    axios
    .get('http://localhost:5000/api/movies')
    .then(res => setMovies(res.data))
    .catch(err => console.log(err))
  })
  return (
    <Router>
    <div className="App">
      <Switch>
  <Route path= "/movie-list" render={props => (<MovieList {...props} movies={movies}/>)}
  />
      <Route exact path= "/update-movie/:id" 
      render={props => (<Movie {...props} movies={movies} updateMovie={setMovies}/>)}
       />
       <Route path="/movie-form" component={MovieForm}/>
       <Route path="/edit-item/:id" render={props => (<UpdatedMovie {...props} movies={movies} updateMovie={setMovies} />)}
       />
      </Switch>
    </div>
    </Router> 
  );
}
export default App;
