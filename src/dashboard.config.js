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
  theme: 'mosaic-blueprint-theme pt-dark',
  widgets: [
    { type: 'map', source: 'iss_location',  name: 'Current ISS location' },
    { type: 'line_graph', source: 'iss_temperature', name: 'Temperature' },
    { type: 'video', source: 'iss_feed', name: 'ISS Feed' },
  ],
  dataSources: {
    iss_feed: { name: 'ISS Feed', type: 'video', url: 'https://www.youtube.com/watch?v=ddFvjfvPnqk', public: true },
    iss_temperature: { name: 'Temperature', type: 'json', url: 'https://fake-url.data-stream.json', public: true, refresh: 2000 },
    iss_location: {name: 'Current ISS location', type: 'json', url: 'https://fake-url.data-stream.json', public: true, refresh: 5000 }
  }
}

