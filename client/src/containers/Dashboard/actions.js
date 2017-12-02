export const DASHBOARD_CHANGE = 'DASHBOARD_CHANGE'

export const onDashboardChange = (currentNode = {}) => ({
  type: DASHBOARD_CHANGE,
  currentNode
})
