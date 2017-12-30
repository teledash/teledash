import {
  Widget,
  MapWidget,
  LineGraphWidget,
  VideoWidget
} from '../../db/models'

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
      case 'map':
        return MapWidget.createWidget(widget, fields)
      case 'video':
        return VideoWidget.createWidget(widget, fields)
      default:
        throw Error('Attempted to create widget of invalid `type`.')
    }
  })
}
