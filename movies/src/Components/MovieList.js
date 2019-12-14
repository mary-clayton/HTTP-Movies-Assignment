import React from 'react';
import axios from 'axios';

const MovieList = (props) => {
    const editMovie = (e, movie) => {
        e.preventDefault();
        props.history.push(`/edit-movie/${movie.id}`);
    }
    const addMovie = e => {
        e.preventDefault();
        props.history.push(`/add-movie`);
    }
    const deleteMovie = (e, movie) => {
        e.preventDefault();
        axios
        .delete(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then(res => {
            console.log('res', res);
            props.history.push('/movie-list')
        })
        .catch(err => err)
    }
    return (
<div>
{props.movies.map(movie => (
    <div
    className="movie-card"
    key={movie.id}> 
    <p>{movie.title}</p>
    <p>{movie.director}</p>
    <p>{movie.metascore}</p>
    <p>{movie.stars}</p>
    <button onClick={e => editMovie(e,movie)}>Edit</button>
    <button onClick= {e => deleteMovie(e,movie)}>Delete</button>
    </div>
))}
 <div className="buttons">
<button onClick = {e => addMovie(e)}>Add</button>
    </div>
   </div> 
   )
}
export default MovieList;