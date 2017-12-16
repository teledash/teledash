import React from 'react'

import {
  Map,
  Video,
  LineGraph
} from '../../widgets'

import { DatasourceMapper } from '../../containers'

export default function widgetFactory(type, name, datasourceId) {
  const mapper = {
    map: <DatasourceMapper widget={Map} datasourceId={datasourceId} />,
    line_graph: <DatasourceMapper widget={LineGraph} />,
    video: <DatasourceMapper widget={Video} />
  }

  return mapper[type]
}
