import React , { useState } from 'react'

const ImageSearch = ({SearchText}) => {
    const [Text , setText] = useState('');

    
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg my-10 mx-10'>
        <form onSubmit={(e)=>{e.preventDefault(); SearchText(Text);}} className='w-full max-w-sm' action="">
            <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
                <input onChange={(e) => setText(e.target.value)} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Search Image' type="text"  />
                <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type="submit">
                    Search
                </button>
            </div>
        </form>
    </div>
    
  )
}

export default ImageSearch;
