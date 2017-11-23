import React from 'react'

import {
  LineGraph,
  Map,
  Video,
} from '../../components'

export function selectWidget(type) {
  const mapper = {
    map: <Map />,
    line_graph: <LineGraph />,
    video: <Video />
  }

  return mapper[type]
}
