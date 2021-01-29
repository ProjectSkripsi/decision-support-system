import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  SUBMIT_NEW_MODEL_REQUEST,
  DELETE_MODEL_REQUEST,
  PUBLISH_MODEL_REQUEST,
} from '../actions';
import {
  sumbitModelSuccess,
  sumbitModelError,
  deleteModelSuccess,
  deleteModelError,
  publishModelSuccess,
  publishModelError,
} from './actions';
import {
  sumbitModelService,
  deleteModelService,
  publishModelService,
} from './services';

function* submitModelSaga({ payload }) {
  try {
    const response = yield call(sumbitModelService, payload);
    const { callBack } = payload;
    if (callBack) {
      callBack(response);
    }
    yield put(sumbitModelSuccess(response));
  } catch (error) {
    yield put(sumbitModelError(error));
  }
}

function* deleteModelSaga({ payload }) {
  const { ids } = payload;
  try {
    const response = yield call(deleteModelService, ids);
    const { callBack } = payload;
    if (callBack) {
      callBack(response);
    }
    yield put(deleteModelSuccess(response));
  } catch (error) {
    yield put(deleteModelError(error));
  }
}

function* publishModelSaga({ payload }) {
  const { id, type } = payload;
  try {
    const response = yield call(publishModelService, id, type);
    const { callBack } = payload;
    if (callBack) {
      callBack(response);
    }
    yield put(publishModelSuccess(response));
  } catch (error) {
    yield put(publishModelError(error));
  }
}

export function* watchSubmitModelSaga() {
  yield takeEvery(SUBMIT_NEW_MODEL_REQUEST, submitModelSaga);
}

export function* watchDeleteModelSaga() {
  yield takeEvery(DELETE_MODEL_REQUEST, deleteModelSaga);
}

export function* watchPublishModelSaga() {
  yield takeEvery(PUBLISH_MODEL_REQUEST, publishModelSaga);
}

export default function* rootSaga() {
  yield all([fork(watchSubmitModelSaga)]);
  yield all([fork(watchDeleteModelSaga)]);
  yield all([fork(watchPublishModelSaga)]);
}
