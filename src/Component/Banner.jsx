import React from 'react'

const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(https://survi.in/wp-content/uploads/2019/02/Survi-Review-Tamil-Peranbu-Compassion-Rating-Explaination.jpeg)`}} >
      {/* <h1> This is from banner</h1> */}
      <div className='text-white text-xl font-bold text-center w-full bg-gray-900/70' >
        Peranbu
      </div>
    </div>
  )
}

export default Banner
