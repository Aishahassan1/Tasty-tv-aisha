import {useState, useEffect} from 'react';
import './App.css';
import Header from "./Header"
import MovieList from './MovieList';
import Favourites from './Favourites';
import Footer from './Footer';
 

function App() {

  const [favourites, setFavourites] = useState([])
  const [movies, setMovies] = useState([])
  // const [btnColor, setBtnColor] = useState("red")
  const [watchedMovie, setWatchedMovie] = useState("false")
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
  // ALL THE ABOVE ARE DONE AND CORRECT //

  function changeWatched(color) {
    if(watchedMovie === true) {
    
    }
  }

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
      <Favourites favourites={favourites} removeAll={removeAll} removeMovie={removeMovie} watchedMovier={watchedMovie}/>
      <Footer />
    </div>
  );
}

export default App;
