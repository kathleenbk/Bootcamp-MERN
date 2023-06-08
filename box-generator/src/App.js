// If you need to keep track of something that is changing, USE STATE
import React, { useState } from 'react';
import './App.css';
import ColorForm from './components/ColorForm';

function App() {
  
  const [boxes, setBoxes] = useState([]);
  

  return (
    <div className='main-container'>
      <ColorForm setBoxes={setBoxes} boxes={boxes}/>

      <div className='box-container'>
                {boxes.map((color, i) => {
                    return (
                        <div key={i}
                            style={{ backgroundColor: color, width: 200, height: 200, marginRight: 10 }} className='box'>
                        </div>
                    );
                })}

      </div>
    </div>
      
  );
}

export default App;
