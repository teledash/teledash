export const DASHBOARD_CHANGE = 'DASHBOARD_CHANGE'
export const GET_DASHBOARDS = 'GET_DASHBOARDS'
export const RECEIVE_DASHBOARDS = 'RECEIVE_DASHBOARDS'

export const dashboardChange = (tree = {}, id) => ({
  type: DASHBOARD_CHANGE,
  tree,
  id
})

export const getDashboards = () => ({
  type: GET_DASHBOARDS
})
