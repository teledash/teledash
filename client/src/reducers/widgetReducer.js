import {
  GET_WIDGET,
  RECEIVE_WIDGETS
} from '../constants'

export const widgetReducer = (state = [], action = {}) => {
  const { widget } = action
  switch (action.type) {
    case GET_WIDGET:
      return [...state, widget]
    case RECEIVE_WIDGETS:
      return [...state, ...action.widgets]
    default:
      return state
  }
}
