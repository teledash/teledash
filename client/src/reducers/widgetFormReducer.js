import {
  WRITE_WIDGET_FORM
} from '../constants'

const initialState = {
  id: '',
  name: '',
  type: ''
}

export const widgetFormReducer = (state = initialState , action) => {
  switch(action.type) {
    case WRITE_WIDGET_FORM:
      return { ...state, ...action.payload }
    default: return state
  }
}