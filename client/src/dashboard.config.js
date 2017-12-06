export default {
  windows: {
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
  dataSources: {
    iss_feed: {
      name: 'ISS Feed',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=ddFvjfvPnqk',
    },
    iss_temperature: {
      name: 'Temperature',
      type: 'json',
      url: '/api/linegraph',
      refresh: 2000
    },
    iss_location: {
      name: 'Current ISS location',
      type: 'json',
      url: 'https://fake-url.data-stream.json',
      refresh: 5000
    }
  },
  widgets: [
    {
      type: 'map',
      source: 'iss_location',
      name: 'Current ISS location'
    },
    {
      type: 'line_graph',
      source: 'iss_temperature',
      name: 'Temperature'
    },
    {
      type: 'video',
      source: 'iss_feed',
      name: 'ISS Feed'
    },
    {
      type: 'line_graph',
      source: 'iss_temperature',
      name: 'Temperature'
    }
  ]
}

