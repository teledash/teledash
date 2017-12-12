import {
  ADD_NEW_WINDOW_TO_TOP_RIGHT,
  ADD_WIDGET
} from '../../constants'

export const addWidget = payload => ({
  type: ADD_WIDGET,
  payload
})

export const addToTopRight = id => ({
  type: ADD_NEW_WINDOW_TO_TOP_RIGHT,
  id
})
