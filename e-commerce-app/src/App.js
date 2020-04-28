import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/navigation/Navbar.component';
import LandingPage from './views/LandingPage.view';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
