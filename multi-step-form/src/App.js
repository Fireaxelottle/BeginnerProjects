import React , { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
    <Navbar step={step}/>
     <UserForm  step={step} setStep={setStep}/>
     <Footer/>
    </div>
  );
}

export default App;
