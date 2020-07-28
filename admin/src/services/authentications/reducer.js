import * as types from './actionTypes';

const initialState = {
  authenticated: false,
  user: {},
  errors: {},
  isProcessing: false,
  isAdmin: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
  case types.LOG_IN_SUCCESS:
    return { ...state, user: action.data, authenticated: true };

  case types.LOG_IN_FAILURE:
    return { ...state, errors: action.errors };
  case types.GET_USER_SUCCESS:
    return {...state, user: action.user}
  case types.GET_USER_FAILURE:
    return {...state, errors: action.errors}
  case types.LOG_OUT:
    return { ...state, user: {}, authenticated: false };

  case types.START_PROCESSING:
    return { ...state, isProcessing: true };

  case types.FINISH_PROCESSING:
    return { ...state, isProcessing: false };

  case types.CLEAR_ERRORS:
    return { ...state, errors: {} };

  default:
    return state;
  }
}