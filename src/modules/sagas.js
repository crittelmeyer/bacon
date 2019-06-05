import { all, fork } from 'redux-saga/effects';
import { watchFetchRepos } from './repos/reposSagas';

export default function* sagas() {
  yield all([fork(watchFetchRepos)]);
}
