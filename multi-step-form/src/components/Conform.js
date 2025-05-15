import React from 'react'

const Conform = ({firstName, lastName, email , nextSTEP , prevSTEP}) => {
  return (
    <div className=''>
      <div className='my-10 flex flex-col justify-center items-center'>
        <div className='mt-5'>
          <p>{firstName}</p>
        </div>
        <div className='mt-5 '>
          <p>{lastName}</p>
        </div>
        <div className='mt-5 '>
          <p>{email}</p>
        </div>
     </div>
      <button className='mx-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12' onClick={nextSTEP}>Next</button>

      <button className='mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12' onClick={prevSTEP}>Previous</button>
    </div>
    
    
  )
}

export default Conform;
