import { Widget, MapWidget, LineGraphWidget } from '../../db/models'

export default function createWidget(body) {
  const { name, type, dashboardId, ...fields } = body
  return Widget.create({
    name,
    type,
    dashboardId
  }).then(widget => {
    switch (body.type) {
      case 'line_graph':
        return LineGraphWidget.createWidget(widget, fields)
      default:
        return Promise.reject('Not a valid type')
    }
  }).catch(error => console.log(error))
}
