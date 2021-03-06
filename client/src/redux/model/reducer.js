import {
  SUBMIT_NEW_MODEL_REQUEST,
  SUBMIT_NEW_MODEL_SUCCESS,
  SUBMIT_NEW_MODEL_ERROR,
  DELETE_MODEL_REQUEST,
  DELETE_MODEL_SUCCESS,
  DELETE_MODEL_ERROR,
  PUBLISH_MODEL_REQUEST,
  PUBLISH_MODEL_SUCCESS,
  PUBLISH_MODEL_ERROR,
  UPDATE_CURRICULUM_REQUEST,
  UPDATE_CURRICULUM_SUCCESS,
  UPDATE_CURRICULUM_ERROR,
  GET_MODEL_BY_ID_REQUEST,
  GET_MODEL_BY_ID_SUCCESS,
  GET_MODEL_BY_ID_ERROR,
  UPDATE_MODEL_REQUEST,
  UPDATE_MODEL_SUCCESS,
  UPDATE_MODEL_ERROR,
} from '../actions';

const INIT_STATE = {
  data: [],
  error: null,
  isLoading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SUBMIT_NEW_MODEL_REQUEST:
    case DELETE_MODEL_REQUEST:
    case PUBLISH_MODEL_REQUEST:
    case UPDATE_CURRICULUM_REQUEST:
    case GET_MODEL_BY_ID_REQUEST:
    case UPDATE_MODEL_REQUEST:
      return { ...state, isLoading: true, error: '' };
    case SUBMIT_NEW_MODEL_SUCCESS:
    case DELETE_MODEL_SUCCESS:
    case PUBLISH_MODEL_SUCCESS:
    case UPDATE_CURRICULUM_SUCCESS:
    case GET_MODEL_BY_ID_SUCCESS:
    case UPDATE_MODEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case SUBMIT_NEW_MODEL_ERROR:
    case DELETE_MODEL_ERROR:
    case PUBLISH_MODEL_ERROR:
    case UPDATE_CURRICULUM_ERROR:
    case GET_MODEL_BY_ID_ERROR:
    case UPDATE_MODEL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
