import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import sagas from './modules/sagas';
import history from './utils/history';

import App from './containers/App';

import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState, history);
store.runSaga(sagas);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE,
);
