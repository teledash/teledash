import {
  SELECT_DASHBOARD,
  UNSELECT_DASHBOARD
} from '../constants'

const initialState = ''

export const selectedDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DASHBOARD:
      return action.id
    case UNSELECT_DASHBOARD:
      return ''
    default: return state
  }
}
