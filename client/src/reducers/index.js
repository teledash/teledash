import { combineReducers } from 'redux'
import {
  Corner,
  getNodeAtPath,
  getOtherDirection,
  getPathToCorner,
  updateTree,
} from 'react-mosaic-component'
import _ from 'lodash'
import config from '../dashboard.config'
import {
  ADD_VIDEO,
  ADD_LINE_GRAPH,
  ADD_MAP
} from '../constants'

import {
  ASSIGN_INTERVAL_ID,
  GET_MAP_DATA,
  GET_LINE_GRAPH_DATA,
  RECEIVE_LINE_GRAPH_DATA
} from '../containers/DataManager/constants'

import { DASHBOARD_CHANGE } from '../containers/Dashboard/actions'

const {dataSources, ...mainConfig} = config

const configReducer = (state = mainConfig, action = {}) => {
  Object.freeze(state)

  switch (action.type) {
    case ADD_VIDEO:
    case ADD_LINE_GRAPH:
    case ADD_MAP:
      return addNewWidget(state, action.type)
    case DASHBOARD_CHANGE:
      return { ...state, currentNode: action.currentNode }
    default: return state
  }
}

function addNewWidget(currentState, type) {
  const { widgets, windowCount, currentNode, ...rest } = currentState
  //FIXME: This should be easier convert to serialized format
  const widgetType = type.split('_').slice(1).join('_').toLowerCase()
  return {
    ...addToTopRight(
      currentNode, widgetType, widgets, windowCount
    ), ...rest
  }
}

function addToTopRight(currentNode, widgetType, widgets, windowCount) {
  if (currentNode) {
    const path = getPathToCorner(currentNode, Corner.TOP_RIGHT)
    const parent = getNodeAtPath(currentNode, _.dropRight(path))
    const destination = getNodeAtPath(currentNode, path)
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
    currentNode = updateTree(currentNode, [{
      path,
      spec: {
        $set: {
          direction, first, second,
        },
      },
    }])
  } else {
    currentNode = ++windowCount
  }

  return { currentNode, windowCount, widgets: [...widgets, { type: widgetType, source: 'iss_feed' }] }
}

const dataReducer = (state = dataSources, action = {}) => {
  switch(action.type) {
    case GET_LINE_GRAPH_DATA: return state
    case RECEIVE_LINE_GRAPH_DATA:
      console.log(action)
      return state
    case GET_MAP_DATA: return state
    case ASSIGN_INTERVAL_ID: return assignIntervalId(state, action)
    default: return state
  }
}

function assignIntervalId(state, action) {
  const newState = { ...state }
  newState[action.sourceKey].intervalId = action.intervalId
  return newState
}
export default combineReducers({
  config: configReducer,
  dataSources: dataReducer
})
