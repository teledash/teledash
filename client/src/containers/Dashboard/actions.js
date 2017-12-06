export const DASHBOARD_CHANGE = 'DASHBOARD_CHANGE'

export const onDashboardChange = (tree = {}, id) => ({
  type: DASHBOARD_CHANGE,
  tree,
  id
})
