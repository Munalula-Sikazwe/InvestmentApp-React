import React from 'react';
import logo from './logo.svg';
import './App.css';
import {InvestmentForm} from "./investmentForm";
import {ViewInvestments} from "./ViewInvestments";

function App() {
  return (
    <div className="App">
     <InvestmentForm name={'John'} amount={10}/>
        <hr/>
        <ViewInvestments/>
    </div>
  );
}

export default App;
