import {
  ADD_TO_TOP_RIGHT,
  UNSELECT_DASHBOARD
} from '../../constants'

export const addWidget = (type, id) => ({
  type: 'ADD_' + type.toUpperCase(),
  id
})

export const unselectDashboard = id => ({
  type: UNSELECT_DASHBOARD,
  id
})

export const addToTopRight = id => ({
  type: ADD_TO_TOP_RIGHT,
  id
})
