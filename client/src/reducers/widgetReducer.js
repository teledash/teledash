import {
  GET_WIDGET
} from '../constants'
import config from '../dashboard.config'

export const widgetReducer = (state = config.widgets, action = {}) => {
  switch (action.type) {
    case GET_WIDGET:
      return addWidget(state, action.type, Number(action.id))
    default:
      return state
  }
}

function addWidget(widgets, type, dashboardId) {
  const widgetType = type.split('_').slice(1).join('_').toLowerCase()
  return [...widgets, {
    dashboardId,
    type: widgetType,
    source: 'iss_feed'
  }]
}
