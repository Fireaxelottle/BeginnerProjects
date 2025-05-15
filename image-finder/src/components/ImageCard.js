import React from 'react'

const ImageCard = ({image}) => {
    const {webformatURL , user } = image;
  return (
    <div className=" text-white w-1/4 p-1 text-center relative">
            <img src={image.webformatURL} alt="N8/ -I5A6E"  className='w-full h-64 '/>
            <h1 className='text-2xl absolute bottom-3 left-3'>By {image.user}</h1>   
    </div>
  )
}

export default ImageCard
