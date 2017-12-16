import React from 'react'

import {
  Map,
  Video,
  LineGraph
} from '../../widgets'

import { DatasourceMapper } from '../../containers'

export default function widgetFactory(type, name, datasourceId) {
  const mapper = {
    map: Map,
    line_graph: LineGraph,
    video: Video
  }

  return <DatasourceMapper widget={mapper[type]} datasourceId={datasourceId} />
}
