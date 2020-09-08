import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';

import './common.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/start" component={StartPage} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default App;
