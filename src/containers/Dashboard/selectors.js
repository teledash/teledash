import React from 'react'

import {
  Map,
  Video,
  LineGraph
} from '../../components'

export function selectWidget(type, name, data) {
  const mapper = {
    map: <Map />,
    line_graph: <LineGraph title={name} data={data} />,
    video: <Video />
  }

  return mapper[type]
}
