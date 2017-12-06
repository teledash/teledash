import {
  DASHBOARD_CHANGE,
  ADD_TO_TOP_RIGHT
} from '../constants'

import {
  Corner,
  getNodeAtPath,
  getOtherDirection,
  getPathToCorner,
  updateTree,
} from 'react-mosaic-component'
import _ from 'lodash'
import config from '../dashboard.config'

export const windowReducer = (state = config.windows, action = {}) => {
  Object.freeze(state)
  switch (action.type) {
    case ADD_TO_TOP_RIGHT:
      return addToTopRight(state.tree, state.windowCount)
    case DASHBOARD_CHANGE:
      return {
        ...state,
        tree: action.tree
      }
    default:
      return state
  }
}

function addToTopRight(tree, windowCount) {
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

  return { tree, windowCount }
}
