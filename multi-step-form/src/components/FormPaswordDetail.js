import React from 'react'

const FormPaswordDetail = ({setPassword, setConfirmPassword, prevSTEP, nextSTEP}) => {
  return (
    <div>
       <div className='my-10 flex flex-col justify-center items-center'>
      <input
       type="text" 
       className='p-2 m-2' 
       placeholder='Password' 
       onChange={(e)=>setPassword(e.target.value)}
      />
      <input
       type="text"
       className='p-2 m-2' 
       placeholder='Confirm Password' 
       onChange={(e)=>setConfirmPassword(e.target.value)} 
      />
      </div>
     <button className='mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12' onClick={nextSTEP}>Next</button>
     <button className='mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12' onClick={prevSTEP}>Previous</button>
    </div>
  )
}

export default FormPaswordDetail;