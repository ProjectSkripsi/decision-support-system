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

export const sumbitModel = (data, callBack) => ({
  type: SUBMIT_NEW_MODEL_REQUEST,
  payload: { data, callBack },
});

export const sumbitModelSuccess = (response) => ({
  type: SUBMIT_NEW_MODEL_SUCCESS,
  payload: response,
});

export const sumbitModelError = (error) => ({
  type: SUBMIT_NEW_MODEL_ERROR,
  payload: { error },
});

export const deleteModel = (ids, callBack) => ({
  type: DELETE_MODEL_REQUEST,
  payload: { ids, callBack },
});

export const deleteModelSuccess = (response) => ({
  type: DELETE_MODEL_SUCCESS,
  payload: response,
});

export const deleteModelError = (error) => ({
  type: DELETE_MODEL_ERROR,
  payload: { error },
});

export const publishModel = (id, type, callBack) => ({
  type: PUBLISH_MODEL_REQUEST,
  payload: { id, type, callBack },
});

export const publishModelSuccess = (response) => ({
  type: PUBLISH_MODEL_SUCCESS,
  payload: response,
});

export const publishModelError = (error) => ({
  type: PUBLISH_MODEL_ERROR,
  payload: { error },
});

export const updateCurriculum = (title, fileUrl, callBack) => ({
  type: UPDATE_CURRICULUM_REQUEST,
  payload: { title, fileUrl, callBack },
});

export const updateCurriculumSuccess = (response) => ({
  type: UPDATE_CURRICULUM_SUCCESS,
  payload: response,
});

export const updateCurriculumError = (error) => ({
  type: UPDATE_CURRICULUM_ERROR,
  payload: { error },
});

export const getModelById = (id, callBack) => ({
  type: GET_MODEL_BY_ID_REQUEST,
  payload: { id, callBack },
});

export const getModelByIdSuccess = (response) => ({
  type: GET_MODEL_BY_ID_SUCCESS,
  payload: { response },
});

export const getModelByIdError = (error) => ({
  type: GET_MODEL_BY_ID_ERROR,
  payload: { error },
});

export const updateModel = (data, id, callBack) => ({
  type: UPDATE_MODEL_REQUEST,
  payload: { data, id, callBack },
});

export const updateModelSuccess = (response) => ({
  type: UPDATE_MODEL_SUCCESS,
  payload: response,
});

export const updateModelError = (error) => ({
  type: UPDATE_MODEL_ERROR,
  payload: { error },
});
