import chalk from 'chalk'
import {
  db,
  Dashboard,
  Datasource,
  Widget,
  MapWidget,
  LineGraphWidget
} from './db'

const dashboards = [
  {
    name: 'ISS Tracker',
    tree: {
      direction: 'row',
      first: 1,
      second: 2
    },
    windowCount: 2,
  },
  {
    name: 'Dashboard 2',
    tree: {
      direction: 'row',
      first: {
        direction: 'column',
        first: 1,
        second: 2
      },
      second: {
        direction: 'column',
        first: 3,
        second: 4
      }
    },
    windowCount: 4
  },
  {
    name: '',
    tree: {},
    windowCount: 0
  }
]

const datasources = [
  {
    name: 'ISS Feed',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=ddFvjfvPnqk'
  },
  {
    name: 'Temperature',
    type: 'rest',
    url: '/api/linegraph',
    refresh: 5000
  },
  {
    name: 'Current ISS location',
    type: 'rest',
    url: 'http://api.open-notify.org/iss-now.json',
    refresh: 5000
  }
]

const widgets = [
  {
    name: 'Current ISS location',
    type: 'map',
    position: 0,
    datasourceId: 3,
    dashboardId: 1
  },
  {
    name: 'Current ISS Video Feed',
    type: 'video',
    position: 1,
    datasourceId: 1,
    dashboardId: 1
  },
  {
    name: 'Temperature',
    type: 'line_graph',
    position: 0,
    datasourceId: 2,
    dashboardId: 2
  },
  {
    name: 'Temperature',
    type: 'line_graph',
    position: 1,
    datasourceId: 2,
    dashboardId: 2
  },
  {
    name: 'Temperature',
    type: 'line_graph',
    position: 2,
    datasourceId: 2,
    dashboardId: 2
  },
  {
    name: 'Temperature',
    type: 'line_graph',
    position: 3,
    datasourceId: 2,
    dashboardId: 2
  }
]

const mapWidgets = [
  {
    mapCenterLat: 'iss_position.latitude',
    mapCenterLong: 'iss_position.longitude',
    markerLat: 'iss_position.latitude',
    markerLong: 'iss_position.longitude',
    widgetId: 1
  }
]

const lineGraphWidgets = [
  {
    x: 'timestamp',
    y: 'temperature',
    xLabel: 'Time',
    yLabel: 'Temperature C°',
    widgetId: 3
  }
]

const seed = () =>
  Promise.all(
    dashboards.map(dashboard => Dashboard.create(dashboard))).then(() => (
      Promise.all(
        datasources.map(datasource => Datasource.create(datasource)))
    ))
    .then(() => Promise.all(
      widgets.map(widget => Widget.create(widget))))
    .then(() => Promise.all(
      mapWidgets.map(widget => MapWidget.create(widget))))
    .then(() => Promise.all(
      lineGraphWidgets.map(widget => LineGraphWidget.create(widget))))

const main = () => {
  console.log(chalk.blue('Syncing db...'))
  db.sync({ force: true })
    .then(() => {
      console.log(chalk.blue('Seeding databse...'))
      return seed()
    })
    .then(() => {
      console.log(chalk.green('Seeding succeeded'))
    })
    .catch(err => {
      console.log(chalk.red('Error while seeding'))
      console.log(chalk.red(err.stack))
    })
    .finally(() => {
      db.close()
      return null
    })
}

main()
