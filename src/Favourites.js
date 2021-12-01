
import {useState} from 'react';
import MovieList from './MovieList';

function Favourites(props) {

  return (
    
      <div className="favourites">
        <h2>My Favourites</h2>
        {props.favourites.map((favourite) => {
          return <div className="favourite-components">
            <img className="image" src={favourite.bannerUrl} alt="movie"></img>
          <h3 className="image-name">{favourite.name}</h3>
          <div className="btns">
            <button style={{background: "red", color: "white"}} type="submit" className="watched-btn">Watched</button>
          <button type="submit" className="remove-movie-btn" onClick={() => props.removeOneMovie()}>Remove Movie</button>
          </div>
          </div>
        })}
        <div className="remove-buttons">
          <hr/>
        <button className="remove-watched" onClick={()=>props.removeWatchedMovies()}>Remove Watched</button>
        <button className="remove-all" onClick={()=> props.removeAll()}>Remove All</button>
        </div>


      </div>
    );
  }





export default Favourites
