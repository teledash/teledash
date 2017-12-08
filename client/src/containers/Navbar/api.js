import axios from 'axios'

export function createDashboard() {
  return axios.post('/api/dashboards').then(res => res.data)
}

export function updateDashboard(fields, id) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve({ ...fields, id }), 100)
  })
}
  // return axios.get(url).then(({data}) => data)

