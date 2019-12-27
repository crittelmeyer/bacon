import {
  LOAD_HOPS,
  LOAD_HOPS_SUCCESS,
  LOAD_HOPS_ERROR,
} from './hopsConstants';

export const loadHops = () => ({
  type: LOAD_HOPS,
});

export const hopsLoaded = hops => ({
  type: LOAD_HOPS_SUCCESS,
  hops,
});

export const hopsLoadingError = error => ({
  type: LOAD_HOPS_ERROR,
  error,
});
