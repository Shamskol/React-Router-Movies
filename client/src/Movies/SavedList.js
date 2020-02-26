import React from 'react';
import {Link} from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
   
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
   <Link to="/">
    <div className="movies-button">Saved Movies:</div>
    </Link>  

<Link to="/"> 
<div className="home-button">Home</div>
 </Link> 
  </div>
);

export default SavedList;
