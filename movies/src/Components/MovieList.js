import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ListStyle = styled.div ` 
display: flex;
flex-flow: wrap;
.movie-card {
    display:flex;
    flex-flow: column;
    width: 50%;
    margin: 0%;
    
    button {
        margin: 0% 30% 3% 30%;
        height: 35px;
    }
}
.buttons {
  width: 50%;
  button {
      margin-top: 50%;
      width: 80%;
      background-color: white;
      border: none;
  }
}
.movies {
    width: 100%;
    margin-left: 0%;
}
.add {
width: 10%;
}
`

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
<ListStyle>
{props.movies.map(movie => 
(
    <div
    className="movie-card"
    key={movie.id}> 
    <img className="movies" src ="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80"/>
    <p>{movie.title}</p>
    <p>{movie.director}</p>
    <p>{movie.metascore}</p>
    <p>{movie.stars}</p>
    <button onClick={e => editMovie(e,movie)}>Edit</button>
    <button onClick= {e => deleteMovie(e,movie)}>Delete</button>
    </div>
))
}
<div className="buttons">
<button onClick = {e => addMovie(e)}><img className="add" src="https://img.icons8.com/android/24/000000/plus.png"/></button>
    </div>
    </ListStyle> 
   )
}
export default MovieList;