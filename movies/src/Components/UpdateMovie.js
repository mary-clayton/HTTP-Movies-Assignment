import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: ''
}

const UpdateForm = props => {
const [movie, setMovie] = useState(initialMovie);
useEffect(()=> {
    console.log(props.movies)
    const movieToEdit = props.movies.find(
        movie =>`${movie.id}` === props.match.params.id
    );

    if (movieToEdit) setMovie(movieToEdit)

    }, [props.movies, props.match.params.id]
);

const handleChanges = e => {
    e.persist();
    const movieName = e.target.name;
    setMovie({
        ...movie,
        [movieName]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault();
    axios
    .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
    .then(res => {
        console.log('res', res);
            props.history.push('/movie-list')
    })
    .catch(err => console.log(err))
}

return (
    <div>
        <h2>Update Movie</h2>
        <form onSubmit={ e => handleSubmit(e, movie)}>
            <input type="text" name="title" placeholder="title.." value={movie.title} onChange={handleChanges}/>
            <input type="text" name="director" placeholder="director.."  value={movie.director} onChange={handleChanges} />
            <input type="number" name="metascore" placeholder="metascore.."  value={movie.metascore} onChange={handleChanges}/>
            <input type="text" name="stars" placeholder="stars.."  value={movie.stars} onChange={handleChanges}/>
            <button>Update Movie</button>
            </form>
    </div>
)
}
export default UpdateForm;