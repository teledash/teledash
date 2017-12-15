import {
  RECEIVE_DATASOURCES,
  ASSIGN_INTERVAL_ID,
  GET_REST_DATA,
  RECEIVE_REST_DATA
} from '../constants'

export const dataReducer = (state = {}, action = {}) => {
  console.log(action)
  switch (action.type) {
    case RECEIVE_DATASOURCES:
      return { ...state, ...action.datasources }
    case RECEIVE_REST_DATA:
      return {
        ...state,
        [action.datasourceId]: {
          ...state[action.datasourceId],
          data: action.data
        }
      }
    case ASSIGN_INTERVAL_ID:
      return {
        ...state,
        [action.datasourceId]: {
          ...state[action.datasourceId],
          intervalId: action.intervalId
        }
      }
    default:
      return state
  }
}
