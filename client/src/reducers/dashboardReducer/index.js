import {
  ADD_NEW_WINDOW_TO_TOP_RIGHT,
  RECEIVE_DASHBOARD,
  DASHBOARD_CHANGE,
  RECEIVE_DASHBOARDS
} from '../../constants'

import { addToTopRight } from './util'

export const dashboardReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case RECEIVE_DASHBOARDS:
      return action.dashboards
    case RECEIVE_DASHBOARD:
      const { id, ...rest } = action.dashboard
      return {
        ...state,
        [id]: {
          ...state[id],
          ...rest
        }
      }
    case ADD_NEW_WINDOW_TO_TOP_RIGHT:
      return addToTopRight(
        state,
        action.id,
        state[action.id]
      )
    // This must be done locally at the same time it is done asynchronously
    // or it won't work.
    case DASHBOARD_CHANGE:
      const newDashboardConfig = {
        ...state[action.id],
        tree: action.tree
      }
      return {
        ...state,
        [action.id]: newDashboardConfig
      }
    default:
      return state
  }
}
