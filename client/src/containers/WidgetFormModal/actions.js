import {
  ADD_NEW_WINDOW_TO_TOP_RIGHT,
  CLEAR_WIDGET_FORM,
  WRITE_WIDGET_FORM,
  ADD_WIDGET
} from '../../constants'

export const addWidget = payload => ({
  type: ADD_WIDGET,
  payload
})

export const clearWidgetForm = id => ({
  type: CLEAR_WIDGET_FORM,
  id
})

export const writeWidgetForm = payload => ({
  type: WRITE_WIDGET_FORM,
  payload
})

export const addToTopRight = id => ({
  type: ADD_NEW_WINDOW_TO_TOP_RIGHT,
  id
})
