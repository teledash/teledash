import chalk from 'chalk'
import {
  db,
  Dashboard,
  Datasource,
  Widget
} from './db'

const dashboards = [
  {
    name: 'Dashboard 1',
    tree: {
      first: {
        first: 2,
        second: 4,
        direction: 'row'
      },
      second: {
        first: 1,
        second: 3,
        direction: 'row'
      },
      direction: 'row'
    },
    windowCount: 4
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
    refresh: 2000
  },
  {
    name: 'Current ISS location',
    type: 'rest',
    url: 'https://fake-url.data-stream.json',
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
    name: 'Current ISS location',
    type: 'map',
    position: 1,
    datasourceId: 3,
    dashboardId: 1
  },
  {
    name: 'Current ISS location',
    type: 'map',
    position: 2,
    datasourceId: 3,
    dashboardId: 1
  },
  {
    name: 'Current ISS location',
    type: 'map',
    position: 3,
    datasourceId: 3,
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

const seed = () =>
  Promise.all([
    Promise.all(
      dashboards.map(dashboard => Dashboard.create(dashboard))),
    Promise.all(
      datasources.map(datasource => Datasource.create(datasource))),
    Promise.all(
      widgets.map(widget => Widget.create(widget)))
  ])


const main = () => {
  console.log(chalk.blue('Syncing db...'))
  db.sync({force: true})
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
