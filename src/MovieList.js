
import {useState} from 'react';
import Favourites from './Favourites';

function MovieList(props) {


    return (
      <div className="MovieList">
        <h2 className="recommended-movies">Recommended Movies</h2>
        {props.movies.map((movie)=> {
         return <div className="movies"> 
         <img className="image" src={movie.bannerUrl} alt="movie"></img>
          <h3 className="image-name">{movie.name}</h3>
          <button type="submit" className="fave-btn" onClick={()=> props.addFavourites(movie)}>Add to Fave</button>

        </div>
        })}
      </div>
    );
  }

  // <button onClick={()=>{changeWatchedColor("green")}} style={{background: "red", color: "white"}} type="submit" className="watched-btn">Watched</button>
  // <button type="submit" className="watched-btn" onClick={()=>props.markWatched(movie)} style={{backcolor: props.markWatched ? "green" : "red"}}>Watched</button>




export default MovieList
