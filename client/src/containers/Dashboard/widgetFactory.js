import React from 'react'

import {
  Map,
  Video,
  LineGraph
} from '../../components'

export default function widgetFactory(type, name, data) {
  const mapper = {
    map: <Map data={data} />,
    line_graph: <LineGraph data={data} />,
    video: <Video />
  }

  return mapper[type]
}
