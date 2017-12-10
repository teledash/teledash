import {
  ADD_TO_TOP_RIGHT,
  CLEAR_WIDGET_FORM
} from '../../constants'

export const addWidget = (type, id) => ({
  type: `ADD_${type.toUpperCase()}`,
  id
})

export const clearWidgetForm = id => ({
  type: CLEAR_WIDGET_FORM,
  id
})

export const addToTopRight = id => ({
  type: ADD_TO_TOP_RIGHT,
  id
})
