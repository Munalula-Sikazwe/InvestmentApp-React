import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MakeInvestmentComponent} from "./Components/MakeInvestmentComponent";
import {ViewInvestmentsComponent} from "./Components/ViewInvestmentsComponent";
// @ts-ignore
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import {NavbarComponent} from "./Components/NavbarComponent";
import {HomeComponent} from "./Components/HomeComponent";

function App() {
  return (
      <Router>
          <div className="App">
<NavbarComponent/>
              <Switch>
                  <Route path='/' exact component={HomeComponent}/>
                  <Route path="/make-investment" component={MakeInvestmentComponent}/>
                  <Route path="/view-investments" component={ViewInvestmentsComponent}/>
              </Switch>

          </div>
      </Router>

  );
}

export default App;
