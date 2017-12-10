import {
  ADD_TO_TOP_RIGHT,
} from '../../constants'

export const addWidget = (type, id) => ({
  type: 'ADD_' + type.toUpperCase(),
  id
})

export const addToTopRight = id => ({
  type: ADD_TO_TOP_RIGHT,
  id
})
