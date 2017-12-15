import {
  ADD_NEW_WINDOW_TO_TOP_RIGHT,
  ADD_WIDGET,
  EDIT_WIDGET
} from '../../constants'

export const addWidget = payload => ({
  type: ADD_WIDGET,
  payload
})

export const editWidget = payload => ({
  type: EDIT_WIDGET,
  payload
})

export const addToTopRight = id => ({
  type: ADD_NEW_WINDOW_TO_TOP_RIGHT,
  id
})
