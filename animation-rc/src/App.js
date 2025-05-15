import React , { useState } from 'react';
import { useTransition,animated } from '@react-spring/web'
import './App.css';
import Component from './components/Component';
import Component1 from './components/Component1';
import Component2 from './components/Component2';


function App() {
  const [compo3, setCompo3] = useState(false);




  return (
    <div >
      <Component />
      <Component1 setCompo3={setCompo3} compo3={compo3}/>
    {compo3 ? <Component2 /> : null}
    </div>
  );
}

export default App;
