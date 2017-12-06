import { combineReducers } from 'redux'
import { dataReducer } from './dataReducer'
import { widgetReducer } from './widgetReducer'
import { windowReducer } from './windowReducer'

export default combineReducers({
  windows: windowReducer,
  dataSources: dataReducer,
  widgets: widgetReducer
})
