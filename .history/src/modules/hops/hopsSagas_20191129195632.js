import { call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { reposLoaded, reposLoadingError } from './reposActions';
import { LOAD_REPOS } from './reposConstants';

function fetchReposApi() {
  return fetch('https://api.github.com/users/Nickew/repos?sort=pushed').then(
    response => response.json(),
  );
}

function* fetchRepos() {
  const repos = yield call(fetchReposApi);
  if (repos.message) {
    yield put(reposLoadingError(repos.message));
  } else {
    yield put(reposLoaded(repos));
  }
}

export function* watchFetchRepos() {
  yield takeEvery(LOAD_REPOS, fetchRepos);
}
