import {
  SUBMIT_NEW_MODEL_REQUEST,
  SUBMIT_NEW_MODEL_SUCCESS,
  SUBMIT_NEW_MODEL_ERROR,
} from '../actions';

export const sumbitModel = (data) => ({
  type: SUBMIT_NEW_MODEL_REQUEST,
  payload: { data },
});

export const sumbitModelSuccess = (response) => ({
  type: SUBMIT_NEW_MODEL_SUCCESS,
  payload: response,
});

export const sumbitModelError = (error) => ({
  type: SUBMIT_NEW_MODEL_ERROR,
  payload: { error },
});
