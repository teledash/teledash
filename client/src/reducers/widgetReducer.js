import {
  GET_WIDGET
} from '../constants'
import config from '../dashboard.config'

export const widgetReducer = (state = config.widgets, action = {}) => {
  const { widget } = action
  switch (action.type) {
    case GET_WIDGET:
      return addWidget(state, widget.type, Number(widget.dashboardId))
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
