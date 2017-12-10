import {
  DASHBOARD_CHANGE,
  GET_DASHBOARDS,
  GET_WIDGETS
} from '../../constants'

export const dashboardChange = (tree = {}, id) => ({
  type: DASHBOARD_CHANGE,
  tree,
  id
})

export const getDashboards = () => ({
  type: GET_DASHBOARDS
})

export const getWidgets = () => ({
  type: GET_WIDGETS
})
