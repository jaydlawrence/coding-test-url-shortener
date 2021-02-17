import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { ShortenForm } from './components/ShortenForm';
import { RedirectPage } from './components/RedirectPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Switch>
            <Route path="/:stub">
              <RedirectPage />
            </Route>
            <Route path="/">
              <ShortenForm />
            </Route>
          </Switch>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
