// Name of widget is lower case and does not have ADD_ in it. This is because
// this is what is used for the serialized values
export const addWidget = (type) => ({
  type: 'ADD_' + type.toUpperCase()
})
