import Dashboard from './dashboard'
import Datasource from './datasource'
import Widget from './widget'
import MapWidget from './mapWidget'
import LineGraphWidget from './LineGraphWidget'

Dashboard.hasMany(Widget, { onDelete: 'cascade', hooks: true })
Widget.belongsTo(Dashboard)
Widget.hasOne(MapWidget)
Widget.hasOne(LineGraphWidget)
MapWidget.belongsTo(Widget)
LineGraphWidget.belongsTo(Widget)

export {
  Dashboard,
  Datasource,
  Widget,
  MapWidget,
  LineGraphWidget
}
