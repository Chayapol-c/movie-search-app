import React, {useState} from 'react';
import './SearchMovies.css'

import MovieCard from './MovieCard'

const SearchMovies = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const searchMovies = async (e) =>{
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })
            .catch(err => console.log(err))
        
    }
    return (
        <>
            <form 
                action="" 
                className="form"
                onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input 
                    type="text"
                    name="query" 
                    placeholder="Search..."
                    className="input"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    />
                <button 
                    className="button" 
                    type="submit" >
                    Search
                </button>
            </form>
            
            <div className="card-list">
                {movies
                    .filter(movie => movie.poster_path)
                    .map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>


        </>
    );
}

export default SearchMovies;
