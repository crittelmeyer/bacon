import 'regenerator-runtime/runtime';

/* IE 10+ support */
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';
import 'core-js/modules/es.object.values';
import 'core-js/modules/es.set';
import 'core-js/modules/es.map';

import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import sagas from './modules/sagas';
import history from './utils/history';
import configureStore from './configureStore';

import App from './containers/App';

import './globalStyles.scss';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

store.runSaga(sagas);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

render();
