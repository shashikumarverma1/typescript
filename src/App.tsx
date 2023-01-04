import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Event from './component/Event';
function App() {
  let list =[25,1,2,5,4,2,5]
  return (
    <div className="App">
     wow
     <Home name="monu" age={25} list={list} >hoooooooom</Home>
     <Event/>
    </div>
  );
}

export default App;
