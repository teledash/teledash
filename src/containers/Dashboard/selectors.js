import React from 'react'

import {
  Map,
  Video,
} from '../../components'

import {
  LineGraph
} from '../'

export function selectWidget(type, name, data) {
  const mapper = {
    map: <Map />,
    line_graph: <LineGraph title={name} data={data} />,
    video: <Video />
  }

  return mapper[type]
}
