import { put, takeLatest, all, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {
  GET_DASHBOARD,
  CREATE_DASHBOARD
} from '../../constants'
// import { createDashboard } from './api'

export function* getNewDashboard() {
  console.log('hello')
  const data = yield call(delay, 500)
  yield put({ type: GET_DASHBOARD, id: 3, tree: [], name: 'Fake name', windowCount: 0 })
}

export default function* navbarSaga() {
  yield all([
    takeLatest(CREATE_DASHBOARD, getNewDashboard),
  ])
}
