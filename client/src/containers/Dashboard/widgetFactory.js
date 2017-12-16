import React from 'react'

import { Map } from '../../widgets'
import {
  Video,
  LineGraph
} from '../../components'

import { DatasourceMapper } from '../../containers'

export default function widgetFactory(type, name, datasourceId) {
  const mapper = {
    map: <DatasourceMapper widget={Map} datasourceId={datasourceId} />,
    line_graph: <DatasourceMapper widget={LineGraph} />,
    video: <DatasourceMapper widget={Video} />
  }

  return mapper[type]
}
