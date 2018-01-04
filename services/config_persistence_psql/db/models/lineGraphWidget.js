import Sequelize from 'sequelize'
import db from '../db'

const LineGraphWidget = db.define('lineGraphWidget', {
  xValue: Sequelize.STRING,
  yValue: Sequelize.STRING,
  xLabel: Sequelize.STRING,
  yLabel: Sequelize.STRING,
})

LineGraphWidget.createWidget = function (widget, fields) {
  return this.create(fields)
    .then(lineGraphWidget => {
      lineGraphWidget.setWidget(widget)
      return this.project(widget, lineGraphWidget)
    })
}

LineGraphWidget.updateWidget = function (widget, fields) {
  return this.update(fields, {
    where: {
      widgetId: widget.id
    },
    returning: true,
    plain: true
  })
    .spread((numOfAffectedWidgets, lineGraphWidget) => this.project(widget, lineGraphWidget))
}

LineGraphWidget.project = function (widget, fields) {
  const { id, dashboardId, name, type, position } = widget

  const {
    xValue,
    yValue,
    xLabel,
    yLabel
  } = fields

  return {
    id,
    name,
    type,
    dashboardId,
    position,
    extraFields: {
      xValue,
      yValue,
      xLabel,
      yLabel
    }
  }
}

export default LineGraphWidget;
