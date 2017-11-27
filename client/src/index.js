import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './redux/configureStore';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './utils/registerServiceWorker';

import App from './containers/App';
import './index.css';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

// Render the root component
ReactDOM.render(
  // Make the Redux store available to all components in the application
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      {/* The main app container */}
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

// Enable true hot reloading
if (module.hot) {
  module.hot.accept();
}
