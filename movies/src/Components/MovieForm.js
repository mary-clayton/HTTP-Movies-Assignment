import React, {useState} from 'react';
import axios from 'axios'


const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: ''
}

const MovieForm = (props) => {
    const [movie, setMovie] = useState(initialMovie);

    const handleChanges = e => {
    const movieName = e.target.name;
    setMovie({
        ...movie,
        [movieName]: e.target.value
    })
}
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/movies', movie)
        .then(res => {
            console.log('res', res);
            props.history.push('/movie-list')
        })
    }
    return (
        <div>
            <h2>Add New Movie</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="title.." onChange={handleChanges} required/>
            <input type="text" name="director" placeholder="director.." onChange={handleChanges} required/>
            <input type="number" name="metascore" placeholder="metascore.." onChange={handleChanges} required/>
            <input type="text" name="stars" placeholder="stars.." onChange={handleChanges} required/>
            <button>Add New Movie</button>
            </form>
        </div>
    )
    }
export default MovieForm;