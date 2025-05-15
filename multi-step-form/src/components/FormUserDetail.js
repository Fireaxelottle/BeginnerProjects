import React from 'react'

const FormUserDetail = ({ setFirstName, setLastName, setEmail , nextSTEP , firstName , lastName , email}) => {
  return (
  <div className=' container'>
    <div className='my-10 flex flex-col justify-center items-center'>
      <input
       type="text" 
       className='p-2 m-2' 
       placeholder='First Name' 
       onChange={(e)=>setFirstName(e.target.value)}
       value={firstName}
      />
      <input
       type="text"
       className='p-2 m-2' 
       placeholder='Last Name' 
       onChange={(e)=>setLastName(e.target.value)}
       value={lastName}
      />
      <input
       type="text"
       className='p-2 m-2' 
       placeholder='Email'
       onChange={(e)=>setEmail(e.target.value)}
       value={email}
      />
    </div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12' onClick={nextSTEP}> Next </button>
  </div>
  )
}

export default FormUserDetail;
