import { put, takeLatest, all, call } from 'redux-saga/effects'
import {
  GET_DASHBOARDS,
  RECEIVE_DASHBOARDS,
  DASHBOARD_CHANGE,
  RECEIVE_DASHBOARD,
  GET_WIDGETS,
  RECEIVE_WIDGETS
} from '../../constants'

import dashboardAPI from '../../api/dashboards'
import widgetAPI from '../../api/widgets'

function* getDashboards() {
  try {
    const dashboards = yield call(dashboardAPI.getDashboards)
    yield put({ type: RECEIVE_DASHBOARDS, dashboards })
  } catch (error) {
    console.error(error)
  }
}

function* updateDashboardTree({ tree, id }) {
  try {
    const dashboard = yield call(dashboardAPI.updateDashboard, { tree }, id)
    yield put({ type: RECEIVE_DASHBOARD, dashboard })
  } catch (error) {
    console.error(error)
  }
}

function* getWidgets() {
  try {
    const widgets = yield call(widgetAPI.getWidgets)
    yield put({ type: RECEIVE_WIDGETS, widgets })
  } catch (error) {
    console.error(error)
  }
}

export default function* dashboardSaga() {
  yield all([
    takeLatest(GET_DASHBOARDS, getDashboards),
    takeLatest(GET_WIDGETS, getWidgets),
    takeLatest(DASHBOARD_CHANGE, updateDashboardTree)
  ])
}
