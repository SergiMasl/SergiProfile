import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import './slider.css';
import React, { useState } from "react";


function App() {
  const [rootIndex, setRootIndex] = useState(0);

  return (
    <>
      <Navbar 
        onTabClick={(arg) => {setRootIndex(arg)}}
        rootIndex={rootIndex}
      />
      <Main componentIndex={rootIndex}/>
    </>
  );
}

export default App;
