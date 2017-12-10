import {
  ASSIGN_INTERVAL_ID,
  GET_MAP_DATA,
  GET_LINE_GRAPH_DATA,
  RECEIVE_LINE_GRAPH_DATA
} from '../containers/DataManager/constants'

import config from '../dashboard.config'

export const dataReducer = (state = config.datasources, action = {}) => {
  switch (action.type) {
    case GET_LINE_GRAPH_DATA:
      return state
    case RECEIVE_LINE_GRAPH_DATA:
      return state
    case GET_MAP_DATA:
      return state
    case ASSIGN_INTERVAL_ID:
      return assignIntervalId(state, action)
    default:
      return state
  }
}

function assignIntervalId(state, action) {
  const newState = {
    ...state
  }
  newState[action.sourceKey].intervalId = action.intervalId
  return newState
}
