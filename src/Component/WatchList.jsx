import React from 'react'

function WatchList() {
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
      <input type='text' placeholder='Enter the Movie list..' className='h-[3rem] w-[18rem] bg-gray 900 px-8 outline-none text-gray-500' />

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
          <tr>
            <td className='flex items-center px-6 py-4 '>
              <img className='h-[8rem] w-[8rem] ' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSEPTIrvv8DxvKSdDec-1KhwErePCyy-E-Q&s`} />
              <div className='mx-10'>Jumanji</div>
            </td>
            <td>7.5</td>
            <td>9</td>
            <td>Adventure</td>
            <td className='text-red-600'>Delete</td>
          </tr>

        </tbody>
      </table>

    </div>
    </>
  )
}

export default WatchList
