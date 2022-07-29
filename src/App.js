import React, { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);

  return (
    <div>
      <div className='align'></div>
      <div className="App">
        <h1>Counter App</h1>
        <h2>The Count is <span>{count}</span></h2>
        <button onClick={()=>count > 100 ? null : setCount(count + 1)}>Increase Counter</button>
        <button onClick={()=>count <= 0 ? null : setCount(count - 1)}>Decrease Counter</button>
        <button onClick={()=> setCount(0)}>Reset</button>
        <p>By-Abindran</p>
      </div>
    </div>
  );
}

export default App;
