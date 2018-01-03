import Sequelize from 'sequelize'
import db from '../db'

const VideoWidget = db.define('videoWidget')

VideoWidget.createWidget = function (widget, { datasourceId }) {
  return this.create()
    .then(videoWidget => {
      videoWidget.setWidget(widget)
      videoWidget.setDatasource(datasourceId)

      return videoWidget.getDatasource()
        .then(({ url }) => this.project(widget, { url, datasourceId }))
    })
}

VideoWidget.updateWidget = function (widget, { datasourceId }) {
  return this.find({
    where: {
      widgetId: widget.id
    }
  })
    .then(videoWidget => {
      videoWidget.setDatasource(datasourceId)
      return videoWidget.getDatasource()
        .then(({ url }) => this.project(widget, { url, datasourceId }))
    })
}

VideoWidget.project = function (widget, { datasourceId, url }) {
  const { id, dashboardId, name, type } = widget
  return {
    id,
    name,
    type,
    dashboardId,
    extraFields: {
      url,
      datasourceId
    }
  }
}

export default VideoWidget
