import React from 'react'

const ImageCard = ({image , key}) => {
    const tags = image.tags.split(',');
  return (
    <div className='max-w-screen-sm rounded overflow-hidden shadow-lg justify-center '>
      <img src={image.webformatURL} alt="sdasd" className='w-full ' loading="lazy"/>
      
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By {image.user}
         </div>
         <ul>
          <li >
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
         </ul>
      </div>

      <div className="px-6 py-4 text-center">
        {tags.map((tag , index) => (
          <span key={index} className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
          </span>
        ))}
        
      </div>
    </div>
  )
}

export default ImageCard
