import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/navigation/Navbar.component';
import LandingPage from './views/LandingPage.view';
import ProductDetails from './views/product/ProductDetails.view';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/products" component={LandingPage} />
          <Route exact path="/products/:id" component={ProductDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
