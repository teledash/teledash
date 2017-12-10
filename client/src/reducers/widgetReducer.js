import {
  ADD_VIDEO,
  ADD_LINE_GRAPH,
  ADD_MAP
} from '../constants'
import config from '../dashboard.config'

export const widgetReducer = (state = config.widgets, action = {}) => {
  switch (action.type) {
    case ADD_VIDEO:
    case ADD_LINE_GRAPH:
    case ADD_MAP:
      return addNewWidget(state, action.type, Number(action.id))
    default:
      return state
  }
}

function addNewWidget(widgets, type, dashboard_id) {
  const widgetType = type.split('_').slice(1).join('_').toLowerCase()
  return [...widgets, {
    dashboard_id,
    type: widgetType,
    source: 'iss_feed'
  }]
}
