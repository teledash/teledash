import chalk from 'chalk'
import Promise from 'bluebird'
import {
  db,
  Dashboard,
  Datasource,
  Widget,
  MapWidget,
  LineGraphWidget,
  VideoWidget
} from './db'

const dashboards = [
  {
    name: 'ISS Tracker',
    tree: {
      direction: 'row',
      first: {
        first: 1,
        second: 2,
        direction: 'column'
      },
      second: 3
    },
    windowCount: 3
  },
  {
    name: 'Dashboard 2',
    tree: {
      direction: 'row',
      first: 1,
      second: 2
    },
    windowCount: 2,
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
    url: '/sim/linegraph/imperfect',
    refresh: 5000
  },
  {
    name: 'Current ISS location',
    type: 'rest',
    url: 'http://api.open-notify.org/iss-now.json',
    refresh: 5000
  },
  {
    name: 'Eagle Nest Cam',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=ka3S94yaWeg'
  }
]

const widgets = [
  {
    name: 'ISS location',
    type: 'map',
    position: 1,
    dashboardId: 1
  },
  {
    name: 'Current ISS Video Feed',
    type: 'video',
    position: 2,
    dashboardId: 1
  },
  {
    name: 'Temperature',
    type: 'line_graph',
    position: 1,
    dashboardId: 2
  },
  {
    name: 'Temperature2',
    type: 'line_graph',
    position: 2,
    dashboardId: 2
  },
  {
    name: 'Temperature3',
    type: 'line_graph',
    position: 3,
    dashboardId: 1
  },
]

const videoWidgets = [
  {
    datasourceId: 1,
    widgetId: 2
  }
]

const mapWidgets = [
  {
    markerLat: '[3][iss_position][latitude]',
    markerLong: '[3][iss_position][longitude]',
    widgetId: 1
  }
]

const lineGraphWidgets = [
  {
    xValue: '[2][data][timestamp]',
    yValue: '[2][data][temperature]',
    xLabel: 'Time',
    yLabel: 'Temperature C°',
    widgetId: 3
  },
  {
    xValue: '[2][data][timestamp]',
    yValue: '[2][data][temperature]',
    xLabel: 'Time',
    yLabel: 'Temperature C°',
    widgetId: 4
  },
  {
    xValue: '[2][data][timestamp]',
    yValue: '[2][data][temperature]',
    xLabel: 'Time',
    yLabel: 'Temperature C°',
    widgetId: 5
  }
]

const seed = () =>
  Promise.each(dashboards, dashboard => Dashboard.create(dashboard))
    .then(() => Promise.each(datasources, ds => Datasource.create(ds)))
    .then(() => Promise.each(widgets, w => Widget.create(w)))
    .then(() => Promise.each(mapWidgets, w => MapWidget.create(w)))
    .then(() => Promise.each(lineGraphWidgets, w => LineGraphWidget.create(w)))
    .then(() => Promise.each(videoWidgets, w => VideoWidget.create(w)))

const main = () => {
  console.log(chalk.blue('Syncing db...'))
  db.sync({ force: true })
    .then(() => {
      console.log(chalk.blue('Seeding database...'))
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
