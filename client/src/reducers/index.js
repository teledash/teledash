import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { dataReducer } from './dataReducer'
import { widgetReducer } from './widgetReducer'
import { dashboardReducer } from './dashboardReducer'
import { widgetFormReducer } from './widgetFormReducer'
import { selectedDashboardReducer } from './selectedDashboardReducer'

export default combineReducers({
  dashboards: dashboardReducer,
  datasources: dataReducer,
  widgets: widgetReducer,
  selectedDashboard: selectedDashboardReducer,
  widgetForm: widgetFormReducer,
  router: routerReducer
})
