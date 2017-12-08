import { put, takeLatest, all, call } from 'redux-saga/effects'
import {
  DASHBOARD_CHANGE,
  GET_DASHBOARDS,
  RECEIVE_DASHBOARDS
} from './actions'

import api from './api'

function * getDashboards() {
  const dashboards = yield api.getDashboards()
  yield put({ type: RECEIVE_DASHBOARDS, dashboards })
}

export default function * dashboardSaga() {
  yield all([
    takeLatest(GET_DASHBOARDS, getDashboards)
  ])
}
