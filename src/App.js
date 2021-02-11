import React, { useState } from 'react'
import './App.css';
import Statepage from './components/Statepage';

function App() {
  const [name,setName] = useState("INITIAL VALUE"); 

  const formChange = event =>{
    setName(event.target.value);
  }

  return (
    <div className="App">
      <form>
        <input type="text" onChange={formChange} className="input" placeholder="Name" />
      </form>
      <Statepage infoProp={name}  />
    </div>
  );
}

export default App;
