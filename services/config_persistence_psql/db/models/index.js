import Dashboard from './dashboard'
import Datasource from './datasource'
import Widget from './widget'

Dashboard.hasMany(Widget, { onDelete: 'cascade', hooks: true })
Widget.belongsTo(Dashboard)

Datasource.hasMany(Widget)
Widget.belongsTo(Datasource)

export {
  Dashboard,
  Datasource,
  Widget
}
