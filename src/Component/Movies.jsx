import React from 'react'
import MoviesCard from './MovieCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Movies = () => {

  const [movies,setMovies]= useState([]);


  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=43055ef224d22cc6d645f22adf791e14&language=en-IN&page=1' ).then(function(res){
    //  console.log(res.data.results);
      setMovies(res.data.results);
    })
  },[])



  return (
    <div className='p-5'>
      <div className='text-2xl font-bold text-center'>
        Trending Movies
      </div>
      <div className='m-4 flex flex-row flex-wrap justify-around gap-8'>
        {
          movies.map((movieObject,index)=>{
           return <MoviesCard key={index} poster_path={movieObject.poster_path} title={movieObject.original_title}/>
          })
        }
       
      </div>
    </div>
  )
}

export default Movies
