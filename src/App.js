import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
      axios.get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean
      `)
      .then(res => {
          console.log(res);
          setData(res.data.results);
      })
  },[]);

  const handleClick = () => {
    if(count >= data.length) {
      const index = count + 1;
      setCount(index);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello React</h1>
        <h2>Wow dev1 Branch</h2>
        {
          data && data.length > 0 &&
          <Quiz title={data[count].category} question={data[count].question}/>
        }
        
      </header>
      <div>
        {
          data && data.length > 0 &&
          <button onClick={handleClick} disabled={count >= data.length - 1}>Next</button>
        }
        
      </div>
      <h1>{count + 1} of 10</h1>
    </div>
  );
}

export default App;
