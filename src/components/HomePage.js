import React from 'react'
import Baner from './Baner';
import NavBar from './NavBar';
import requests from '../Requests';
import Row from './Row';
function HomePage({handleLogOut}) {
    
    return (
        <>
            <NavBar handleLogOut={handleLogOut}/>
            <Baner/>
            <Row 
                title='Netflix Originals'
                fetchUrl={requests.fetchNetFlixOriginals}
                isLarge
            />
            <Row 
                title='Netflix Trendings'
                fetchUrl={requests.fetchTrending}
            
            />
            <Row 
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            
            />
            <Row 
                title='Actions'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row 
                title='Horrors'
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
                title='Romantic'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
                title='Commedies'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
                title='Documentaires'
                fetchUrl={requests.fetchDocumentaries}
            />
        </>
    )
}

export default HomePage
