import { use, useState,useEffect } from 'react'

function WatchList({watchList}) {


    const [search,setSearch]= useState("");

    let handleSearch=(e)=>{
        setSearch(e.target.value);
    }

  return (
    <>

    <div className='flex justify-center flex-wrap m-4 '>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-blue-500 rounded-xl text-white font-bold mx-4 '>
        Action
      </div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-blue-500 rounded-xl text-white font-bold mx-4 '>
        All type
      </div>      
    </div>


    <div className=' flex justify-center my-4'>
      <input onChange={handleSearch} value={search} type='text' placeholder='Enter the Movie list..' className='h-[3rem] w-[18rem] bg-gray 300 px-8 outline-none text-gray-500' />

    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 m-8' >
      <table className='w-full text-gray-800 text-center '>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>genre</th>
          </tr>
        </thead>

        <tbody>

          {watchList.filter((movieOdj)=>{
            return movieOdj.name.toLowerCase().includes(search.toLocaleLowerCase())
          })
          .map((MovieObj)=>{
            return <tr>
             <td className='flex items-center px-6 py-4 '>
              <img className='h-[8rem] w-[8rem] ' src={`https://image.tmdb.org/t/p/w500/${MovieObj.poster_path}`} />
              <div className='mx-10'>{MovieObj.name}</div>
             </td>
             <td>{MovieObj.vote_average}</td>
             <td>9</td>
             <td>Adventure</td>
             <td className='text-red-600'>Delete</td>
          </tr>
          })
          }
          
        </tbody>
      </table>

    </div>
    </>
  )
}

export default WatchList
