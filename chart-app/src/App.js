import React , { useState } from 'react';
import './App.css';
import PopChart from './components/PopChart';
import { Chart } from 'chart.js';

function App() {
  const [data, setData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Population',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: ["rgb(75, 192, 192)" , "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(153, 102, 255)", "rgb(201, 203, 207)", "rgb(255, 99, 132)"],
        
      }
    ]
  });
  const [options, setOptions] = useState({});

  
  return (
    <div className="App">
      <h1>PopChart-2</h1>
      <PopChart data={data} options={options}/>
    </div>
      
    
  );
}

export default App;
