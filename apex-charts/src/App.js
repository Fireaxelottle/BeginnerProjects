import React, { useState } from "react";
import "./App.css";
import PopChart from "./components/PopChart";
import { type } from "@testing-library/user-event/dist/type";

function App() {

  const [options,setOptions ] = useState({});
  const [series, setSeries] = useState([]);
  const oneChart = () => {
    setOptions({
      chart: {
        type: 'line'
      },
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      }
    });
    setSeries([
      { name: "series-1", data: [30, 40, 45, 50, 49, 60, 70, 91, 125], type: 'column' },
    ]);
  }
  const twoChart = () => {
    setOptions({
      chart: {
        type: 'line'
      },
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      }
    });
    setSeries([
      { name: "series-2", data: [335, 390, 380, 350, 40, 70, 91, 125 , 456], type: 'column' },
    ]);
  }
  
 

  return (
    <div className="container text-center">
      <h1 className="text-3xl font-bold  m-5" >Pop Chart</h1>
      <PopChart options={options} series={series} />
      <div className="container">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
          onClick={oneChart}>
          Generate 1
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
          onClick={twoChart}>
          Generate 2
        </button>
      </div>
    </div>
  );
}

export default App;
