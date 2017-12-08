import {
  ADD_TO_TOP_RIGHT,
  RECEIVE_DASHBOARD
} from '../containers/Navbar/actions'

import {
  DASHBOARD_CHANGE,
  RECEIVE_DASHBOARDS
} from '../containers/Dashboard/actions'

import {
  Corner,
  getNodeAtPath,
  getOtherDirection,
  getPathToCorner,
  updateTree,
} from 'react-mosaic-component'
import _ from 'lodash'
import config from '../dashboard.config'

export const dashboardReducer = (state = [], action = {}) => {
    Object.freeze(state)
    switch (action.type) {
      case RECEIVE_DASHBOARDS: return action.dashboards
      case RECEIVE_DASHBOARD:
        const { id, ...rest } = action
        return {
          ...state,
          [id]: {
            ...state[id],
            ...rest
          }
        }
      case ADD_TO_TOP_RIGHT:
        return addToTopRight(
          state,
          action.id,
          state[action.id]
        )
      case DASHBOARD_CHANGE:
        const newDashboardConfig = { ...state[action.id], tree: action.tree }
        return {
          ...state,
          [action.id]: newDashboardConfig
        }
      default:
        return state
    }
  }

function addToTopRight(state, id, { name, tree, windowCount }) {
  if (tree) {
    const path = getPathToCorner(tree, Corner.TOP_RIGHT)
    const parent = getNodeAtPath(tree, _.dropRight(path))
    const destination = getNodeAtPath(tree, path)
    const direction = parent ? getOtherDirection(parent.direction) : 'row'
    let first
    let second
    if (direction === 'row') {
      first = destination
      second = ++windowCount
    } else {
      first = ++windowCount
      second = destination
    }
    tree = updateTree(tree, [{
      path,
      spec: {
        $set: {
          direction,
          first,
          second,
        },
      },
    }])
  } else {
    tree = ++windowCount
  }

  return { ...state, [id]: { name, tree, windowCount } }
}
