import {
  ADD_WIDGET
} from './actions'

export const navbarReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      // TODO: dispatch more actions?
      return state
    default:
      return state
  }
}
