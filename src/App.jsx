import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/login" component={LoginPage} /> */}
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default App;
