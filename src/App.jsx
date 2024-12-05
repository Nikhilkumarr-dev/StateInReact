import { createContext,useContext, useState } from 'react';
import './App.css'

const BulbContext=createContext();

function App() {
  const [bulbOn,setBulbOn]=useState(true);

  //we need to use providers to provide the context to the components
  //even need to send the object
  return <div>
  <BulbContext.Provider value={{
    bulbOn:bulbOn,
    setBulbOn:setBulbOn
    }}>
    <Light />
  </BulbContext.Provider>
  </div>
}

function Light()
{
  
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb(){
  const {bulbOn} = useContext(BulbContext);
  return <div>
    {bulbOn ? "BulbOn" : "bulb off"}
  </div>
}

function LightSwitch()
{
  const {bulbOn,setBulbOn}=useContext(BulbContext);
  function toggle()
  {
   setBulbOn(!bulbOn) 
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
