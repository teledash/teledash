export default {
  dashboards: {
    '1': {
      name: 'Dashboard 1',
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
    '2': {
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
  },
  dataSources: {
    iss_feed: {
      name: 'ISS Feed',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=ddFvjfvPnqk',
    },
    iss_temperature: {
      name: 'Temperature',
      type: 'rest',
      url: '/api/linegraph',
      refresh: 2000
    },
    iss_location: {
      name: 'Current ISS location',
      type: 'rest',
      url: 'https://fake-url.data-stream.json',
      refresh: 5000
    }
  },
  widgets: [
    {
      type: 'map',
      source: 'iss_location',
      name: 'Current ISS location',
      dashboard_id: 1,
      position: 0
    },
    {
      type: 'line_graph',
      source: 'iss_temperature',
      name: 'Temperature',
      dashboard_id: 1,
      position: 1
    },
    {
      type: 'map',
      source: 'iss_location',
      name: 'ISS Feed',
      dashboard_id: 1,
      position: 2
    },
    {
      type: 'line_graph',
      source: 'iss_temperature',
      name: 'Temperature',
      dashboard_id: 1,
      position: 3
    },
    {
      type: 'map',
      source: 'iss_location',
      name: 'Current ISS location',
      dashboard_id: 2,
      position: 0
    },
    {
      type: 'line_graph',
      source: 'iss_temperature',
      name: 'Map',
      dashboard_id: 2,
      position: 1
    },
    {
      type: 'line_graph',
      source: 'iss_temperature',
      name: 'Temperature',
      dashboard_id: 2,
      position: 2
    },
    {
      type: 'line_graph',
      source: 'iss_temperature',
      name: 'Temperature',
      dashboard_id: 2,
      position: 3
    },
  ]
}

