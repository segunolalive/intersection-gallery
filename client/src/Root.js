import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import './App.css';
import Header from './Header';

const Root = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/photos/:id" component={App} />
          <Route path="/" component={App} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default Root;
