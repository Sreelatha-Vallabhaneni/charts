import React from 'react';
import './App.css';
import Chart from './components/chart';
import Header from './components/header';
//import data from './components/lettuceBig.json';

function App() {
  return (
    <div className="App">
      <Header/>
      <Chart/> 
    </div>
  );
}

export default App;
