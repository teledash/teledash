import {
  CREATE_DASHBOARD,
  UPDATE_DASHBOARD_NAME,
} from '../../constants'

export const createDashboard = () => ({
  type: CREATE_DASHBOARD
})

export const updateDashboardName = (name, id) => ({
  type: UPDATE_DASHBOARD_NAME,
  name,
  id
})
