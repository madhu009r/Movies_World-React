import React from 'react'

function MovieCard({poster_path,title}) {
  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-row justify-between items-end' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`}}>
     
      <div className='text-white text-xl w-full p-2 text-center bg-gray-600/60  rounded-b-xl'>
        {title} 
      </div>
    </div>
  )
}

export default MovieCard
