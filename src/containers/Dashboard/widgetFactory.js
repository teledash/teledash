import React from 'react'

import {
  Map,
  Video,
  LineGraph
} from '../../components'

export default function widgetFactory(type, name, data) {
  const mapper = {
    map: <Map />,
    line_graph: <LineGraph />,
    video: <Video />
  }

  return mapper[type]
}
