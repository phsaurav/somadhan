import React from 'react';
import logo from './logo.svg';
import { Counter } from './redux/slices/counter/Counter';
import './App.css';

function App() {
  const issue = 'hi';
  const handleButon = () => {
    fetch('http://localhost:5000/issue', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(issue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert('Product added successfully');
        }
      });
    console.log('clicked');
  };
  return (
    <div className="App">
      <button onClick={handleButon}>hi</button>
    </div>
  );
}

export default App;
