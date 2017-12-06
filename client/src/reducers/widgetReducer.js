import {
  ADD_VIDEO,
  ADD_LINE_GRAPH,
  ADD_MAP
} from '../constants'
import config from '../dashboard.config'

export const widgetReducer = (state = config.widgets, action = {}) => {
  Object.freeze(state)
  switch (action.type) {
    case ADD_VIDEO:
    case ADD_LINE_GRAPH:
    case ADD_MAP:
      return addNewWidget(state, action.type)
    default:
      return state
  }
}

function addNewWidget(widgets, type) {
  const widgetType = type.split('_').slice(1).join('_').toLowerCase()
  return [...widgets, {
    type: widgetType,
    source: 'iss_feed'
  }]
}
