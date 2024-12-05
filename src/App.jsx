import { createContext,useContext, useState } from 'react';
import './App.css'

const BulbContext=createContext();


//this is a simple provider creating a own wrapper component take children as input renderring in provider component
function BulbProvider({children})
{
  const [bulbOn,setBulbOn]=useState(true);
  
  
  return <BulbContext.Provider value={{
    bulbOn:bulbOn,
    setBulbOn:setBulbOn
    }}>
      {children}
    </BulbContext.Provider>
}

function App() {
  

 
  return <div>
    <BulbProvider>
      <Light/>
    </BulbProvider>
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
