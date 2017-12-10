import {
  WRITE_WIDGET_FORM,
  SELECT_DASHBOARD,
  CLEAR_WIDGET_FORM
} from '../constants'

const initialState = {
  dashboardId: '',
  id: '',
  name: '',
  type: ''
}

export const widgetFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DASHBOARD:
      return { ...state, dashboardId: action.id }
    case CLEAR_WIDGET_FORM:
      return initialState
    case WRITE_WIDGET_FORM:
      return { ...state, ...action.payload }
    default: return state
  }
}
