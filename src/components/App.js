import React from 'react';
import { Provider } from 'react-redux';
import store from './../config/store';

import Counter from './Counter';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
