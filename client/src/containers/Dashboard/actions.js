export const DASHBOARD_CHANGE = 'DASHBOARD_CHANGE'

export const onDashboardChange = (tree = {}) => ({
  type: DASHBOARD_CHANGE,
  tree
})
