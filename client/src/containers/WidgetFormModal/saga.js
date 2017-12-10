import { put, takeLatest, all, call, select } from 'redux-saga/effects'
import {
  ADD_WIDGET,
  GET_WIDGET,
  ADD_NEW_WINDOW_TO_TOP_RIGHT,
  RECEIVE_DASHBOARD
} from '../../constants'

import widgetAPI from '../../api/widgets'
import dashboardAPI from '../../api/dashboards'

export function* addWidget(action) {
  const { dashboardId } = action.payload
  yield put({ type: ADD_NEW_WINDOW_TO_TOP_RIGHT, dashboardId })
  const { tree, windowCount } =
    yield select(({ dashboards }) => dashboards[dashboardId])
  const dashboard =
    yield call(dashboardAPI.updateDashboard, { windowCount, tree }, dashboardId)
  yield put({ type: RECEIVE_DASHBOARD, dashboard })
  const widget = yield call(widgetAPI.createWidget, action.payload)
  yield put({ type: GET_WIDGET, widget })
}

export default function* widgetFormSaga() {
  yield all([
    takeLatest(ADD_WIDGET, addWidget),
  ])
}
