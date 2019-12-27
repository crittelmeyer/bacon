import produce from 'immer';

import {
  LOAD_HOPS,
  LOAD_HOPS_SUCCESS,
  LOAD_HOPS_ERROR,
} from './hopsConstants';

const initialState = {
  loading: false,
  error: false,
  data: {},
};

/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
const hopsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_HOPS:
        draft.loading = true;
        draft.error = false;
        draft.data = {};
        break;
      case LOAD_HOPS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.data = action.hops;
        break;
      case LOAD_HOPS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default hopsReducer;
