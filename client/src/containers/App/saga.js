import { put, takeLatest, all, call } from 'redux-saga/effects'

import {
  RECEIVE_DATASOURCES,
  GET_DATASOURCES
} from '../../constants'

import api from '../../api/datasources'

function* getDatasources() {
  const datasources = yield call(api.getDatasources)
  yield put({ type: RECEIVE_DATASOURCES, datasources })
}

export default function* dashboardSaga() {
  yield all([
    takeLatest(GET_DATASOURCES, getDatasources),
  ])
}
