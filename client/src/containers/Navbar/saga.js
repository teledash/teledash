import { put, takeLatest, all, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import {
  GET_DASHBOARD,
  CREATE_DASHBOARD,
} from '../../constants'

import { createDashboard } from './api'

export function* getNewDashboard() {
  const data = yield call(createDashboard)
  yield put({ type: GET_DASHBOARD, ...data })
  yield put(push((`/dashboard/${data.id}`)))
}

export default function* navbarSaga() {
  yield all([
    takeLatest(CREATE_DASHBOARD, getNewDashboard),
  ])
}
