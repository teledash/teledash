import { ADD_VIDEO, ADD_LINE_GRAPH, ADD_MAP } from "./constants"

export const addWidget = (type) => {
  // FIXME: Refactor so not using two different types of constants
  switch (type) {
    case 'video': return { type: ADD_VIDEO }
    case 'map': return { type: ADD_MAP }
    case 'line_graph': return { type: ADD_LINE_GRAPH }
    default: return {type: null }
  }
}
