import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import './Gallery.css';
import Header from './Header';

const Root = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/photos" component={Gallery} />
          <Route path="/" component={Gallery} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default Root;
