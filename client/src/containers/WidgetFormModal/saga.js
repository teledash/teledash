import { put, takeLatest, all, call, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import {
  ADD_WIDGET,
  EDIT_WIDGET,
  GET_WIDGET,
  GET_UPDATED_WIDGET,
  ADD_NEW_WINDOW_TO_TOP_RIGHT,
  RECEIVE_DASHBOARD,
} from '../../constants'

import widgetAPI from '../../api/widgets'
import dashboardAPI from '../../api/dashboards'

export function* addWidget(action) {
  const { dashboardId, formData } = action.payload
  yield put(push(`/dashboard/${dashboardId}`))
  yield put({ type: ADD_NEW_WINDOW_TO_TOP_RIGHT, id: dashboardId })
  const { tree, windowCount } =
    yield select(({ dashboards }) => dashboards[dashboardId])
  const dashboard =
    yield call(dashboardAPI.updateDashboard, { windowCount, tree }, dashboardId)
  yield put({ type: RECEIVE_DASHBOARD, dashboard })
  const widget =
    yield call(widgetAPI.createWidget, {
      ...formData,
      dashboardId,
      // The windowCount will be tied to this position. If I reposition this widget
      // on the dashboard, that `window ID` will remain the same as this position.
      position: windowCount
    })
  yield put({ type: GET_WIDGET, widget })
}

export function* editWidget(action) {
  const { dashboardId, widgetId, formData } = action.payload
  yield put(push(`/dashboard/${dashboardId}`))
  const widget =
    yield call(widgetAPI.updateWidget, formData, widgetId)
  yield put({ type: GET_UPDATED_WIDGET, widget })
}

export default function* widgetFormSaga() {
  yield all([
    takeLatest(ADD_WIDGET, addWidget),
    takeLatest(EDIT_WIDGET, editWidget),
  ])
}
