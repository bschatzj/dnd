import React from 'react';
import './App.css';
import Stats from './player/stats';
import Stater from './setup/stater';
import Home from './setup/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import items from './player/items';



function App() {
  return (
    <>  
    <Route exact path="/" component={Home} /> 
    <Route exact path="/stats" component={Stater} />
    <Route exact path="/items" component={items} />
    </>
  );
}

export default App;
