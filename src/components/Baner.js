import React, { useEffect, useState } from 'react'
import './Baner.css'
import axios from '../axios'
import requests from '../Requests'

function Baner() {
    const [movie, setMovie] = useState([])
    useEffect(()=>{
            async function fetcData(){
                const res = await axios.get(requests.fetchNetFlixOriginals);
                const data = await res.data.results;
               setMovie(data[Math.floor(Math.random() * data.length -1)])
               return res;
            } 
            fetcData()
    }, [])
    return (
        <header className="baner" style={{
            backgroundSize:'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition:"center center"
        }}>
            <div className="fade__banner"/>
            
            <div className="baner__content">
                <h1 className="baner__title">{movie? movie.name : "Pas de titre"}</h1>
                <div className="baner__buttons">
                    <button className="baner__button">Play</button>
                    <button className="baner__button">My List</button>
                </div>
                <p className="baner__description">{movie ? movie.overview : "pas de description"}</p>
            </div>
        </header>
    )
}

export default Baner
