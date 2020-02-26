import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, } from "react-router-dom";

const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  const {movieId}=useParams();
console.log(movieId)
  useEffect(() => {
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${movieId}`)
        .then(response => {
          console.log(response)
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[movieId]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

 
  return (
    <div className="save-wrapper">
      <div className="movie-card">
       
        ))}
      </div>
      <Link to= "/">
      <div className="save-button">Save</div>
      </Link>
    </div>
  );
}

export default Movie;
