import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import hopsReducer from './hops/hopsReducer';
import reposReducer from './repos/reposReducer';
import history from '../utils/history';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    repos: reposReducer,
    hops: hopsReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
