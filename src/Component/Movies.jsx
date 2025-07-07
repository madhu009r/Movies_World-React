import React from 'react'
import MoviesCard from './MovieCard'

const Movies = () => {
  return (
    <div className='p-5'>
      <div className='text-2xl font-bold text-center'>
        Trending Movies
      </div>
      <div className='m-4 flex flex-row flex-wrap justify-around'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />

      </div>
    </div>
  )
}

export default Movies
