import Dashboard from './dashboard'
import Datasource from './datasource'
import Widget from './widget'
import MapWidget from './mapWidget'
import LineGraphWidget from './LineGraphWidget'
import VideoWidget from './videoWidget'

Dashboard.hasMany(Widget, { onDelete: 'cascade', hooks: true })

Datasource.hasMany(VideoWidget)

Widget.belongsTo(Dashboard)
Widget.hasOne(MapWidget)
Widget.hasOne(LineGraphWidget)
Widget.hasOne(VideoWidget)

MapWidget.belongsTo(Widget)
LineGraphWidget.belongsTo(Widget)
VideoWidget.belongsTo(Widget)

VideoWidget.belongsTo(Datasource)


export {
  Dashboard,
  Datasource,
  Widget,
  MapWidget,
  LineGraphWidget,
  VideoWidget
}
