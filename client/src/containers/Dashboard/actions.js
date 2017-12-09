import {
  DASHBOARD_CHANGE,
  GET_DASHBOARDS
} from '../../constants'

export const dashboardChange = (tree = {}, id) => ({
  type: DASHBOARD_CHANGE,
  tree,
  id
})

export const getDashboards = () => ({
  type: GET_DASHBOARDS
})
