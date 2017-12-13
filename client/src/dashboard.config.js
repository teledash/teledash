export default {
  datasources: {
    iss_feed: {
      name: 'ISS Feed',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=ddFvjfvPnqk'
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
  widgetTypes: [
    { id: 'video', name: 'Video' },
    { id: 'line_graph', name: 'Line Graph' },
    { id: 'map', name: 'Map' }
  ]
}

