import React from 'react';

const MovieList = (props) => {
    const routeToMovie = (e, movie) => {
        e.preventDefault();
        props.history.push(`/movie-list/${movie.id}`);
    }
    return (
<div>
{props.movies.map(movie => (
    <div onClick={e => routeToMovie(e,movie)}
    className="movie-card"
    key={movie.id}> 
    <p>{movie.title}</p>
    <p>{movie.director}</p>
    <p>{movie.metascore}</p>
    <p>{movie.stars}</p>
    </div>
))}
</div>
    )
}
export default MovieList;