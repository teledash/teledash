import Sequelize from 'sequelize'
import db from '../db'

const MapWidget = db.define('mapWidget', {
  markerLat: Sequelize.STRING,
  markerLong: Sequelize.STRING
})

MapWidget.createWidget = function (widget, fields) {
  return this.create(fields)
    .then(mapWidget => {
      mapWidget.setWidget(widget)

      const { id, dashboardId, name, type } = widget

      const {
        markerLat,
        markerLong
      } = mapWidget

      return {
        id,
        name,
        type,
        dashboardId,
        extraFields: {
          markerLat,
          markerLong
        }
      }
    })
}

export default MapWidget
