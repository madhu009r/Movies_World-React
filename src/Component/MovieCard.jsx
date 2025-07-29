import React from 'react'

function MovieCard({movieObject,poster_path,title,handleAddtoWatchList, handleRemoveFromWatchList, watchList}) {


 function doesContainMovie(movieObject) {

  for(let i=0; i<watchList.length; i++) {
    if(watchList[i].id === movieObject.id) {
      return true;
    }
  }
  return false;
 }


  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`}}>
     

     {doesContainMovie(movieObject) ?<div onClick={()=>(handleRemoveFromWatchList(movieObject))} className='m-4 flex justify-center h-8 w-8 item-center rounded-lg bg-gray-800/60 hover:bg-gray-600/60 duration-300'> &#10060; </div> : 
     <div onClick={()=>(handleAddtoWatchList(movieObject))} className='m-4 flex justify-center h-8 w-8 item-center rounded-lg bg-gray-800/60 hover:bg-gray-600/60 duration-300'>
      &#128525;
     </div>}
     
      <div className='text-white text-xl w-full p-2 text-center bg-gray-600/60  rounded-b-xl'>
        {title} 
      </div>
    </div>
  )
}

export default MovieCard
