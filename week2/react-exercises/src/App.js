import React from 'react';
import './App.css';
import Friend from './Components/EX1/Friend';
import DogGallery from './Components/EX2/DogGallery';
import RandomJoke from './Components/EX3/RandomJoke';

function App() {
  return (
    <div className="App">
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;
