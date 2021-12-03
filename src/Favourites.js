
import {useState} from 'react';
import MovieList from './MovieList';

function Favourites(props) {

  return (
    
      <div className="favourites">
        <h2 className="my-fave">My Favourites</h2>
        {props.favourites.map((favourite) => {
          return <div className="favourite-components">
            <img className="image" src={favourite.bannerUrl} alt="movie"></img>
          <h3 className="image-name">{favourite.name}</h3>
          <div className="btns">
            <button style={{background:favourite.watched ? "green" : "red"}} 
            onClick={()=>{props.changeWatchedColor(favourite)
              }
            } 
            type="submit" className="watched-btn">Watched
            </button>

          <button type="submit" className="remove-movie-btn" onClick={()=>props.removeMovie(favourite)}>Remove Movie</button>
          </div>
          </div>
        })}
        <div className="remove-buttons">
        <button className="remove-watched" onClick={()=>props.removeWatched()}>Remove Watched</button>
        <button className="remove-all" onClick={()=> props.removeAll()}>Remove All</button>
        </div>


      </div>
    );
  }





export default Favourites
