import {
  SELECT_DASHBOARD,
  UNSELECT_DASHBOARD
} from '../constants'

const initialState = ''

// This reducer is a bit awkward. It is used in cases when the route params
// do not reflect the currently active dashboard.
export const selectedDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DASHBOARD:
      return action.id
    case UNSELECT_DASHBOARD:
      return ''
    default: return state
  }
}
