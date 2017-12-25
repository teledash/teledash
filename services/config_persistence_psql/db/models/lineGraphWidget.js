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

      const { dashboardId, name, type} = widget
      const {
        id,
        xValue,
        yValue,
        xLabel,
        yLabel
      } = lineGraphWidget

      return {
        id,
        name,
        type,
        dashboardId,
        extraFields: {
          xValue,
          yValue,
          xLabel,
          yLabel
        }
      }
    })
}

export default LineGraphWidget;
