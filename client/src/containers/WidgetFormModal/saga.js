import { put, takeLatest, all, call } from 'redux-saga/effects'
import {
  ADD_WIDGET,
  GET_WIDGET,
  ADD_TO_TOP_RIGHT
} from '../../constants'

import api from '../../api/widgets'

export function* addWidget(payload) {
  const { widget } = yield call(api.createWidget, payload)
  console.log(widget)
//  yield call({ type: ADD_TO_TOP_RIGHT, id: widget.id })
  //yield put({ type: GET_WIDGET, widget })
}

export default function* widgetFormSaga() {
  yield all([
    takeLatest(ADD_WIDGET, addWidget),
  ])
}
