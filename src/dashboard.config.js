export default {
  windowCount: 4,
  currentNode: {
    direction: 'row',
    first: {
      direction: 'column',
      first: 1,
      second: 2,
    },
    second: {
      direction: 'column',
      first: 3,
      second: 4,
    },
  },
  currentTheme: 'Blueprint Dark',
  widgets: [
    { type: 'map', source: 'iss_location' },
    { type: 'line_graph', source: 'iss_temperature' },
    { type: 'video', source: 'iss_feed' },
    { type: 'empty', source: null }
  ],
  dataSources: [
    { id: 'iss_feed', name: 'ISS Feed', type: 'video', url: 'https://www.youtube.com/watch?v=ddFvjfvPnqk', public: true },
    { id: 'iss_temperature', name: 'Temperature', type: 'json', url: 'https://fake-url.data-stream.json', public: true },
    { id: 'iss_location', name: 'Current ISS location', type: 'json', url: 'https://fake-url.data-stream.json', public: true }
  ]
}

