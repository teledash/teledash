import {
  Widget,
  MapWidget,
  LineGraphWidget,
  VideoWidget
} from '../../db/models'

function widgetAction(actionType, widgetType, widget, fields) {
  const action = actionType + 'Widget'
  switch (widgetType) {
    case 'line_graph':
      return LineGraphWidget[action](widget, fields)
    case 'map':
      return MapWidget[action](widget, fields)
    case 'video':
      return VideoWidget[action](widget, fields)
    default:
      throw Error(`Attempted to ${actionType} widget of invalid "type".`)
  }
}

export function createWidget(body) {
  const { name, type, dashboardId, position, ...fields } = body
  return Widget.create({
    name,
    type,
    dashboardId,
    position
  }).then(widget => widgetAction('create', type, widget, fields))
}

export function updateWidget(body, id) {
  const { name, type, dashboardId, ...fields } = body
  return Widget.update(body, {
    where: { id },
    returning: true, // needed for affectedRows to be populated
    plain: true // makes sure that the returned instances are just plain objects
  })
    .spread((numOfAffectedWidgets, widget) =>
      widgetAction('update', type, widget, fields))
}

