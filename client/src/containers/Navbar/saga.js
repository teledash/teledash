import { put, takeLatest, all, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import {
  RECEIVE_DASHBOARD,
  CREATE_DASHBOARD,
  UPDATE_DASHBOARD_NAME
} from './actions'

import {
  createDashboard,
  updateDashboard
} from './api'

export function* getNewDashboard() {
  const data = yield call(createDashboard)
  yield put({ type: RECEIVE_DASHBOARD, ...data })
  yield put(push((`/dashboard/${data.id}`)))
}

export function* updateDashboardName({ name, id }) {
  const data = yield call(updateDashboard, { name }, id)
  yield put({ type: RECEIVE_DASHBOARD, ...data })
}

export default function* navbarSaga() {
  yield all([
    takeLatest(CREATE_DASHBOARD, getNewDashboard),
    takeLatest(UPDATE_DASHBOARD_NAME, updateDashboardName),
  ])
}
