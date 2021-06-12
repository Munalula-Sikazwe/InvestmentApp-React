import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MakeInvestmentComponent} from "./Components/MakeInvestmentComponent";
import {ViewInvestmentsComponent} from "./Components/ViewInvestmentsComponent";

function App() {
  return (
    <div className="App">
     <MakeInvestmentComponent name={'John'} amount={10}/>
        <hr/>
        <ViewInvestmentsComponent/>
    </div>
  );
}

export default App;
