import {
  ADD_TO_TOP_RIGHT,
  CREATE_DASHBOARD,
  UPDATE_DASHBOARD_NAME
} from '../../constants'

export const addWidget = (type, id) => ({
  type: 'ADD_' + type.toUpperCase(),
  id
})

export const addToTopRight = id => ({
  type: ADD_TO_TOP_RIGHT,
  id
})

export const createDashboard = () => ({
  type: CREATE_DASHBOARD
})

export const updateDashboardName = (name, id) => ({
  type: UPDATE_DASHBOARD_NAME,
  name,
  id
})
