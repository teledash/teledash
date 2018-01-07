import { put, takeLatest, all, call, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import {
  ADD_DATASOURCE,
  EDIT_DATASOURCE,
  GET_DATASOURCE,
  GET_UPDATED_DATASOURCE,
} from '../../constants'

import api from '../../api/datasources'

export function* addDatasource(action) {
  try {
    const { dashboardId, formData } = action.payload
    const datasource = yield call(api.createDatasource, formData)
    yield put({ type: GET_DATASOURCE, datasource })
    yield put(push(`/dashboard/${dashboardId}`))
  } catch (error) {
    console.error(error)
  }
}

export function* editDatasource(action) {
  try {
    const { dashboardId, datasourceId, formData } = action.payload
    const datasource =
      yield call(api.updateDatasource, formData, datasourceId)
    yield put({ type: GET_UPDATED_DATASOURCE, datasource })
    yield put(push(`/dashboard/${dashboardId}`))
  } catch (error) {
    console.error(error)
  }
}

export default function* datasourceFormSaga() {
  yield all([
    takeLatest(ADD_DATASOURCE, addDatasource),
    takeLatest(EDIT_DATASOURCE, editDatasource),
  ])
}
