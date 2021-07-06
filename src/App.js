
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
import {Create} from './curdApp/Create';
import {Update} from './curdApp/Update';
import {Read} from './curdApp/Read';
import Login from './curdApp/Login';
import Test from './pages/Test';
import UseEffectapi from './components/useEffect/useEffectapi';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/create" exact component={Create} />
        <Route path="/read" exact component={Read} />
        <Route path="/update" exact component={Update} />
        <Route path="/login" exact component={Login} />
        <Route path="/test" exact component={Test} />
        <Route path="/useEffectapi" exact component={UseEffectapi} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default App;