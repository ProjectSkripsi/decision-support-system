import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SUBMIT_NEW_MODEL_REQUEST } from '../actions';
import { sumbitModelSuccess, sumbitModelError } from './actions';
import { sumbitModelService } from './services';

function* submitModelSaga({ payload }) {
  try {
    const response = yield call(sumbitModelService, payload);
    yield put(sumbitModelSuccess(response));
  } catch (error) {
    yield put(sumbitModelError(error));
  }
}

export function* watchSubmitModelSaga() {
  yield takeEvery(SUBMIT_NEW_MODEL_REQUEST, submitModelSaga);
}

export default function* rootSaga() {
  yield all([fork(watchSubmitModelSaga)]);
}
