import { call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { hopsLoaded, hopsLoadingError } from './hopsActions';
import { LOAD_HOPS } from './hopsConstants';

function fetchHopsApi() {
  return fetch('http://localhost:3000/search').then(
    response => response.json(),
  );
}

function* fetchHops() {
  const hops = yield call(fetchHopsApi);
  if (hops.message) {
    yield put(hopsLoadingError(hops.message));
  } else {
    yield put(hopsLoaded(hops));
  }
}

export function* watchFetchHops() {
  yield takeEvery(LOAD_HOPS, fetchHops);
}
