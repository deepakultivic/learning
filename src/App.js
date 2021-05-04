
import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
    
  );
};

export default App;