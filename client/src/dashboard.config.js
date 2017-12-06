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
    windowCount: 4,
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
    ],
  dataSources: {
    iss_feed: {
      name: 'ISS Feed',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=ddFvjfvPnqk',
      'public': true
    },
    iss_temperature: {
      name: 'Temperature',
      type: 'line_graph',
      url: '/api/linegraph',
      'public': true,
      refresh: 2000,
      intervalId: 7
    },
    iss_location: {
      name: 'Current ISS location',
      type: 'map',
      url: 'https://fake-url.data-stream.json',
      'public': true,
      refresh: 5000
    }
  }
}

