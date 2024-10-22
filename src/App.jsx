import { useState } from 'react';
import './App.css'

function App() {
  const [bulbOn,setBulbOn]=useState(true);

  return <div>
   <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function Light({bulbOn,setBulbOn})
{
  
  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState  bulbOn={bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function BulbState({bulbOn})
{
  return <div>
    {bulbOn ? "BulbOn" : "bulb off"}
  </div>
}

function ToggleBulbState({bulbOn,setBulbOn})
{
  function toggle()
  {
    //setBulbOn(currentState=>!currentState)
   setBulbOn(!bulbOn) 
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
