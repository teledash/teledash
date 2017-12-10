import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { dataReducer } from './dataReducer'
import { widgetReducer } from './widgetReducer'
import { dashboardReducer } from './dashboardReducer'
import { widgetFormReducer } from './widgetFormReducer'

export default combineReducers({
  dashboards: dashboardReducer,
  datasources: dataReducer,
  widgets: widgetReducer,
  widgetForm: widgetFormReducer,
  router: routerReducer
})
