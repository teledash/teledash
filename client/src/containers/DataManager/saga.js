import { put, takeEvery, all, call } from 'redux-saga/effects'
import {
  GET_REST_DATA,
  RECEIVE_REST_DATA
} from '../../constants'
import { fetchData } from '../../api/dataManager'

export function* getRestData({ url, id }) {
  try {
    const data = yield call(fetchData, url)
    yield put({ type: RECEIVE_REST_DATA, data, datasourceId: id })
  } catch (error) {
    console.error(error)
  }
}

export default function* dataManagerSaga() {
  yield all([
    takeEvery(GET_REST_DATA, getRestData),
  ])
}
