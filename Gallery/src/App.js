import React, { useState , useEffect } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');


  useEffect(() => {
   const fetchData = async () => {
    const res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`);
    const data = await res.json();
    console.log(data.hits)
    setImages(data.hits);
    setLoading(false);
   }
   fetchData();
  }, [term]);

  return (
    <div className="container mx-auto  p-4" align="center">
      <ImageSearch SearchText={(Text)=>setTerm(Text)}  />

        {!loading && images.length === 0 && <h1 className="text-center text-3xl">No Images Found</h1>}
      {loading? <h1 className="text-center text-3xl">Loading...</h1> : <div className="grid  gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
        {images.map((image) => (
          <ImageCard key={image.id} image={image} loading={loading}  />
        ))}
        
      </div>}
    </div>
    
  );
}

export default App;
