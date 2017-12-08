import { combineReducers } from 'redux'
import { dataReducer } from './dataReducer'
import { widgetReducer } from './widgetReducer'
import { dashboardReducer } from './dashboardReducer'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  dashboards: dashboardReducer,
  datasources: dataReducer,
  widgets: widgetReducer,
  router: routerReducer
})
