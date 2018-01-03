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
      return this.project(widget, fields)
    })
}

MapWidget.updateWidget = function (widget, fields) {
  return this.update(fields, {
    where: {
      widgetId: widget.id
    },
    returning: true,
    plain: true
  })
  .spread((numOfAffectedWidgets, mapWidget) => this.project(widget, fields))
}

MapWidget.project = function (widget, fields) {
  const { id, dashboardId, name, type } = widget
  const { markerLat, markerLong } = fields

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
}

export default MapWidget
