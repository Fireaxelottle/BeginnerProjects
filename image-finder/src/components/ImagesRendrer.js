import React from 'react'
import ImageCard from './ImageCard'

const ImagesRendrer = ({images , theator , setTheator}) => {
    
  return (
    <div className='flex  flex-wrap justify-between gap-3  p-10 m-15 text-center '>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      )
      )}
   </div>
  )
}

export default ImagesRendrer
