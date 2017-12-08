// Name of widget is lower case and does not have ADD_ in it. This is because
// this is what is used for the serialized values
export const ADD_TO_TOP_RIGHT = 'ADD_TO_TOP_RIGHT'
export const CREATE_DASHBOARD = 'CREATE_DASHBOARD'
export const UPDATE_DASHBOARD_NAME = 'UPDATE_DASHBOARD_NAME'
export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD'
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
