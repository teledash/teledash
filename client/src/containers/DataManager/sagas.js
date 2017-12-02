import { put, takeLatest, all, call } from 'redux-saga/effects'
import {
  GET_LINE_GRAPH_DATA,
  RECEIVE_LINE_GRAPH_DATA
} from './constants'
import { fetchData } from './api'

export function* getLineGraphData({ url }) {
  const test = yield call(fetchData, url)
  yield put({ type: RECEIVE_LINE_GRAPH_DATA , test })
}

export default function* dataManagerSaga() {
  yield all([
    takeLatest(GET_LINE_GRAPH_DATA, getLineGraphData),
  ])
}
