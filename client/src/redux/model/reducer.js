import {
  SUBMIT_NEW_MODEL_REQUEST,
  SUBMIT_NEW_MODEL_SUCCESS,
  SUBMIT_NEW_MODEL_ERROR,
} from '../actions';

const INIT_STATE = {
  data: [],
  error: null,
  isLoading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SUBMIT_NEW_MODEL_REQUEST:
      return { ...state, isLoading: true, error: '' };
    case SUBMIT_NEW_MODEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case SUBMIT_NEW_MODEL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isLogin: false,
      };

    default:
      return { ...state };
  }
};
