import {
  Corner,
  getNodeAtPath,
  getOtherDirection,
  getPathToCorner,
  updateTree,
} from 'react-mosaic-component'

import _ from 'lodash'

export function addToTopRight(state, id, { name, tree, windowCount }) {
  if (windowCount > 0) {
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
