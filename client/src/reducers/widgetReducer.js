import {
  GET_WIDGET,
  RECEIVE_WIDGETS
} from '../constants'

export const widgetReducer = (state = [], action = {}) => {
  const { widget } = action
  switch (action.type) {
    case GET_WIDGET:
      return addWidget(state, widget.type, Number(widget.dashboardId))
    case RECEIVE_WIDGETS:
      return [...state, ...action.widgets]
    default:
      return state
  }
}

function addWidget(widgets, type, dashboardId) {
  return [...widgets, {
    dashboardId,
    type,
    source: 'iss_feed'
  }]
}
