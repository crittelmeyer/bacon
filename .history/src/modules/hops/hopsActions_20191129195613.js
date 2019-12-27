import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './reposConstants';

export const loadRepos = () => ({
  type: LOAD_REPOS,
});

export const reposLoaded = repos => ({
  type: LOAD_REPOS_SUCCESS,
  repos,
});

export const reposLoadingError = error => ({
  type: LOAD_REPOS_ERROR,
  error,
});
