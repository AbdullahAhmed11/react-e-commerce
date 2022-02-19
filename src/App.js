import React from 'react';
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
function App() {
  return (
    <>
      <Navbar/>

  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={Product} />
    </Switch>
  </Router>
    </>
  );
}

export default App;
