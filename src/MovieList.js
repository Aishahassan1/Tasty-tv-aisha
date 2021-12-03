
import {useState} from 'react';
import Favourites from './Favourites';

function MovieList(props) {


    return (
      <div className="movie-container">
        <h2 className="recommended-movies">Recommended Movies</h2>
        {props.movies.map((movie)=> {
         return <div className="movies"> 
         <img className="image" src={movie.bannerUrl} alt="movie"></img>
          <h3 className="image-name">{movie.name}</h3>
          <h4>Released: {movie.releasedOn}</h4>
          <button type="submit" className="fave-btn" onClick={()=> props.addFavourites(movie)}>Add to Fave</button>
        </div>
        })}
      </div>
    );
  }



export default MovieList
