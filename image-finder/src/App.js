import React , { useState , useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import ImagesRendrer from './components/ImagesRendrer';

function App() {


  const [search, setSearch] = useState('');
  const [number, setNumber] = useState(15);
  const [images, setImages] = useState([]);

useEffect(() => { 
  const FeatchImages = async () => {
    const  res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${search}&image_type=photo&pretty=true&per_page=${number}`);
    const data = await res.json();
    setImages(data.hits);
  }

  FeatchImages();
  console.log(images)
  
}, [number, search])

return (  
     <div>
      <Navbar />
      <Search search={search} setSearch={setSearch} number={number} setNumber={setNumber}/>
      <ImagesRendrer images={images}/>
     </div>
  
    )
   

}

export default App;
