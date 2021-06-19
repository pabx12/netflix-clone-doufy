import React from 'react';
import './App.css';
import Baner from './components/Baner';
import NavBar from './components/NavBar';
import requests from './Requests';
import Row from './components/Row';

function App() {
  return (
    <div className="app">
      <NavBar/>
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

    </div>
  );
}

export default App;
