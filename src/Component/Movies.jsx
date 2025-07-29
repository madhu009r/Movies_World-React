import React from 'react'
import MoviesCard from './MovieCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Pagination from './Pagination'

function  Movies({handleAddtoWatchList, handleRemoveFromWatchList, watchList}) {

  const [movies,setMovies]= useState([]);
  const [pageNo,setPageNo] = useState(1);

  const handlePrev=()=>{
    if(pageNo===1){
      setPageNo(1);
    }
    else{
      setPageNo(pageNo-1);
    }
    
  }

  const handleNext=()=>{
    setPageNo(pageNo+1);  
  }


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=43055ef224d22cc6d645f22adf791e14&language=en-IN&page=${pageNo}` ).then(function(res){
    //  console.log(res.data.results);
      setMovies(res.data.results);
    })
  },[pageNo])



  return (
    <div className='p-5'>
      <div className='text-2xl font-bold text-center'>
        Trending Movies
      </div>
      <div className='m-4 flex flex-row flex-wrap justify-around gap-8'>
        {
          movies.map((movieObject,index)=>{
           return <MoviesCard key={index} movieObject={movieObject} poster_path={movieObject.poster_path} title={movieObject.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/>
          })
        }
       
      
      </div>
       <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies
