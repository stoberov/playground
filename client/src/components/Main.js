import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../containers/Home';
import Counter from './../containers/Counter';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/counter" component={Counter} />
  </Switch>
);

export default Main;
