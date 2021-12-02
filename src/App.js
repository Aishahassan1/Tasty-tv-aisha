import {useState, useEffect} from 'react';
import './App.css';
import Header from "./Header"
import MovieList from './MovieList';
import Favourites from './Favourites';
import Footer from './Footer';
 

function App() {

  const [favourites, setFavourites] = useState([])
  const [movies, setMovies] = useState([])
  const [removeAMovie, setRemoveAMovie] = useState([])

// ALL THE BELOW ARE DONE AND CORRECT //
  function addFavourites(movie) {
    setFavourites([...favourites, movie])
  }

  function removeAll(movie) {
    setFavourites([])
  }

  function removeMovie(movie) {
    const newFavoutites = favourites.filter((favourites) => favourites.name !== movie.name
    )
    setFavourites(newFavoutites)
  }

  function changeWatchedColor(movie) {
    const newFavourites = favourites.map((item)=> {
      if(item.name === movie.name) {
        return {...item, watched: true}
      } return item
    })
    setFavourites(newFavourites)
  }

    // ALL THE ABOVE ARE DONE AND CORRECT //


  // function removeWatchedMovies(movie) {
  //   setRemoveWatch([...removeWatched, movie])
  // }
 
useEffect(()=> {
  async function getMovies() {
    const response = await fetch("https://hub.dummyapis.com/vj/wzGUkpZ")
    const movie = await response.json()
    setMovies(movie)
  }
  getMovies()
}, [])

  return (
    <div className="App"> 
      <Header />
      <MovieList movies={movies} addFavourites={addFavourites} />
      <Favourites favourites={favourites} removeAll={removeAll} removeMovie={removeMovie} changeWatchedColor={changeWatchedColor}/>
      <Footer />
    </div>
  );
}

export default App;
