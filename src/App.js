import {useState, useEffect} from 'react';
import './App.css';
import Header from "./Header"
import MovieList from './MovieList';
import Favourites from './Favourites';
import Footer from './Footer';
 

function App() {

  const [favourites, setFavourites] = useState([])
  const [movies, setMovies] = useState([])
  const [watchedBackground, setwatchedBackground] = useState("red")
  const [removeWatched, setRemoveWatch] = useState([])
  const [removeMovie, setRemoveMovie] = useState([])


  function addFavourites(movie) {
    setFavourites([...favourites, movie])
  }

  function removeAll(movie) {
    setFavourites([])
  }

  function removeOneMovie(movie) {
    setRemoveMovie([...removeMovie, movie])
  }

  // function changeWatchedColor(color) {
  //   if(watchedBackground === "red") {
  //     return !watchedBackground
  //   }
  // }

  function removeWatchedMovies(movie) {
    setRemoveWatch([...removeWatched, movie])
  }
 
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
      <Favourites favourites={favourites} removeAll={removeAll} removeWatchedMovies={removeWatchedMovies} removeOneMovie={removeOneMovie}/>
      <Footer />
    </div>
  );
}

export default App;
