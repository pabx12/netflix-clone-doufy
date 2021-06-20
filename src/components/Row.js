import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'
function Row({title, fetchUrl, isLarge=false}) {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        async function fetcData(){
            const res = await axios.get(fetchUrl);
            const data = await res.data.results;
           setMovies(data)
           return res;
        } 
        fetcData()
}, [fetchUrl])
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie, index) => (
                    ( (isLarge &&  movie.poster_path) || (!isLarge && movie.backdrop_path)) &&
                   (<img 
                        key={index}
                        className={`movie__img ${isLarge && " movie__img__large"}`}
                        src={`https://image.tmdb.org/t/p/original/${isLarge ? movie.poster_path : movie.backdrop_path }`} 
                        alt={movie.name}
                        />
                     )
                ))}
            </div>
        </div>
    )
}

export default Row
