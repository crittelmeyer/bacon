import produce from 'immer';

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './reposConstants';

const initialState = {
  loading: false,
  error: false,
  data: {},
};

/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
const reposReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.data = {};
        break;
      case LOAD_REPOS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.data = action.repos;
        break;
      case LOAD_REPOS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default reposReducer;
