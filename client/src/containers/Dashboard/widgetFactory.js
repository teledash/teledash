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
  datasourceId,
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
    datasourceId={datasourceId}
    extraFields={extraFields}
  />)
}
