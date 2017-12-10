export function getDashboardId({ selectedDashboard, dashboards }, {location}) {
  // Check location.path if dashboard ID is present.
  // If not get from the state.
  const splitPath = location.pathname.split('/')
  const param = splitPath[splitPath.length - 1]
  const routeId = isNaN(+param) ? false : param
  const id = routeId || selectedDashboard
  return dashboards[id] ? dashboards[id].name : null
}
