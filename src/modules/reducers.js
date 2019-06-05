import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reposReducer from './repos/reposReducer';
import history from '../utils/history';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    repos: reposReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
