//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('primary'); // Whether dark mode is enabled or not
  const [isActive, setActive] = useState("false");
  const toggleMode = ()=>{

    if(mode === 'primary'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setActive(!isActive);
    }
    else{
      setMode('primary');
      document.body.style.backgroundColor = 'white';
      setActive(isActive);
    }
  }
  return (
    <>
    <title>MedRep</title>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    </>
 );
}

export default App;
