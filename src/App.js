import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[term,setTerm]=useState("");
  
  return (
    <div className="container">
      <div className='head'>
          <label htmlFor='term'>Guess the number between 1 to 10</label>
      </div>
      <input onChange={(event)=>{
        setTerm(event.target.value)
      }}
        id="term"
        type='text'
        name='term'
      />
    </div>
  );
}

export default App;
