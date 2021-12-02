import {useState, useEffect} from 'react';
import './App.css';
import Header from "./Header"
import MovieList from './MovieList';
import Favourites from './Favourites';
import Footer from './Footer';
 

function App() {

  // const getLocalFavourites =  () => {
  //   let favourite = localStorage.getItem("favourites")
  //   if(favourite) {
  //     return JSON.parse(localStorage.getItem("favourites"))
  //   } else {
  //     return []
  //   }
  // }

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


    function removeWatched(movie) {
      const newFavoutites = favourites.filter((favourites) => favourites.watched === false
      )
      setFavourites(newFavoutites)
    }
 
useEffect(()=> {
  async function getMovies() {
    const response = await fetch("https://hub.dummyapis.com/vj/wzGUkpZ")
    const movie = await response.json()
    setMovies(movie)
  }
  getMovies()
}, [])

// useEffect(()=> {
//   return () => {
//     localStorage.setItem("favourites", JSON.stringify("favourites"))
//   }
// },[favourites])

  return (
    <div className="App"> 
      <Header />
      <MovieList movies={movies} addFavourites={addFavourites} />
      <Favourites favourites={favourites} removeAll={removeAll} removeMovie={removeMovie} changeWatchedColor={changeWatchedColor} removeWatched={removeWatched}/>
      <Footer />
    </div>
  );
}

export default App;
