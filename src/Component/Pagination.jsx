import React from 'react'

function Pagination({pageNo,handleNext,handlePrev}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center items-center'>
      
      <div onClick={handlePrev} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className='px-8'><i class="fa-solid fa-arrow-right-long"></i>
      </div>
    </div>
  )
}

export default Pagination
