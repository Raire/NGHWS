import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import store from '../store';
import NavBar from './NavBar';
import Home from './Home';

const Foo = () => (<div>Foo</div>);

const Main = () => (
  <Provider store={store}>
    <HashRouter>
      <div id="Main">
        <div id="NavBar">
          <NavBar />
        </div>
        <div id="Page">
          <Switch>
            <Route exact path="/test" component={Foo} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  </Provider>
);

export default Main;