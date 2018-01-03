import Sequelize from 'sequelize'
import db from '../db'

const VideoWidget = db.define('videoWidget')

VideoWidget.createWidget = function (widget, { datasourceId }) {
  return this.create()
    .then(videoWidget => {
      videoWidget.setWidget(widget)
      videoWidget.setDatasource(datasourceId)

      const { id, dashboardId, name, type } = widget

      return videoWidget.getDatasource()
        .then(({ url }) => {
        return {
          id,
          name,
          type,
          dashboardId,
          extraFields: {
            url
          }
        }
      })
    })
}

export default VideoWidget
