// Name of widget is lower case and does not have ADD_ in it. This is because
// this is what is used for the serialized values
import { ADD_TO_TOP_RIGHT }  from '../../constants'

export const addWidget = (type) => ({
  type: 'ADD_' + type.toUpperCase()
})

export const addToTopRight = () => ({
  type: ADD_TO_TOP_RIGHT
})
