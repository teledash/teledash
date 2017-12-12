import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { dataReducer } from './dataReducer'
import { widgetReducer } from './widgetReducer'
import { dashboardReducer } from './dashboardReducer'

export default combineReducers({
  dashboards: dashboardReducer,
  datasources: dataReducer,
  widgets: widgetReducer,
  router: routerReducer
})
