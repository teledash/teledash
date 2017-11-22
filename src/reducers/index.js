import { combineReducers } from 'redux'
import config from '../dashboard.config'

const configReducer = (state = config, action = {}) => {
  return state
}

export default combineReducers({
  config: configReducer
})
