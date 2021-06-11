import React from 'react';
import logo from './logo.svg';
import './App.css';
import {InvestmentForm} from "./investmentForm";

function App() {
  return (
    <div className="App">
     <InvestmentForm name={'John'} amount={10}/>
    </div>
  );
}

export default App;
