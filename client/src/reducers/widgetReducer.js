import {
  GET_WIDGET,
  RECEIVE_WIDGETS,
  GET_UPDATED_WIDGET
} from '../constants'

export const widgetReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_WIDGET:
      return [...state, action.widget]
    case GET_UPDATED_WIDGET:
      const newState = state.filter(widget => widget.id !== action.widget.id)
      return [...newState, action.widget]
    case RECEIVE_WIDGETS:
      return [...state, ...action.widgets]
    default:
      return state
  }
}
