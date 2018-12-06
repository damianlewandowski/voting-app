import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import SignupContainer from './SignupContainer';
import NavbarContainer from './NavbarContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signup" component={SignupContainer} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
