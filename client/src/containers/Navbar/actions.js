import {
  CREATE_DASHBOARD,
  UPDATE_DASHBOARD_NAME,
  ADD_DASHBOARD_ID_TO_WIDGET_FORM
} from '../../constants'

export const createDashboard = () => ({
  type: CREATE_DASHBOARD
})

export const updateDashboardName = (name, id) => ({
  type: UPDATE_DASHBOARD_NAME,
  name,
  id
})

export const selectDashboard = id => ({
  type: ADD_DASHBOARD_ID_TO_WIDGET_FORM,
  id
})
