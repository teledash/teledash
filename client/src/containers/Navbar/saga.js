import { put, takeLatest, all, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import {
  RECEIVE_DASHBOARD,
  CREATE_DASHBOARD,
  UPDATE_DASHBOARD_NAME
} from '../../constants'

import api from '../../api/dashboards'

export function* getNewDashboard() {
  try {
    const dashboard = yield call(api.createDashboard)
    yield put({ type: RECEIVE_DASHBOARD, dashboard })
    yield put(push((`/dashboard/${dashboard.id}`)))
  } catch (error) {
    console.error(error)
  }
}

export function* updateDashboardName({ name, id }) {
  try {
    const dashboard = yield call(api.updateDashboard, { name }, id)
    yield put({ type: RECEIVE_DASHBOARD, dashboard })
  } catch (error) {
    console.error(error)
  }
}

export default function* navbarSaga() {
  yield all([
    takeLatest(CREATE_DASHBOARD, getNewDashboard),
    takeLatest(UPDATE_DASHBOARD_NAME, updateDashboardName),
  ])
}
