import { all, fork } from 'redux-saga/effects';
import { watchFetchRepos } from './repos/reposSagas';
import { watchFetchHops } from './hops/hopsSagas';

export default function* sagas() {
  yield all([
    fork(watchFetchRepos),
    fork(watchFetchHops),
  ]);
}
