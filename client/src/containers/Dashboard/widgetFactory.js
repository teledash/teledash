import React from 'react'

import {
  Map,
  Video,
  LineGraph
} from '../../widgets'

import { DatasourceMapper } from '../../containers'

export default function widgetFactory({
  type,
  name,
  extraFields
}) {
  const mapper = {
    map: Map,
    line_graph: LineGraph,
    video: Video
  }

  return (<DatasourceMapper
    name={name}
    widgetType={mapper[type]}
    extraFields={extraFields}
  />)
}
