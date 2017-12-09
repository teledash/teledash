import { put, takeLatest, all, call } from 'redux-saga/effects'
import {
  GET_DASHBOARDS,
  RECEIVE_DASHBOARDS,
  DASHBOARD_CHANGE,
  RECEIVE_DASHBOARD
} from '../../constants'

import api from '../../api/dashboards'

function* getDashboards() {
  const dashboards = yield call(api.getDashboards)
  yield put({ type: RECEIVE_DASHBOARDS, dashboards })
}

function* updateDashboardTree({ tree, id }) {
  const dashboard = yield call(api.updateDashboard, { tree }, id)
  yield put({ type: RECEIVE_DASHBOARD, dashboard })
}

export default function* dashboardSaga() {
  yield all([
    takeLatest(GET_DASHBOARDS, getDashboards),
    takeLatest(DASHBOARD_CHANGE, updateDashboardTree)
  ])
}
