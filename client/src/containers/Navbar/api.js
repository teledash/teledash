import axios from 'axios'

export function createDashboard() {
  return axios.post('/api/dashboards').then(res => res.data)
}

export function updateDashboard(fields, id) {
  return axios.put(`/api/dashboards/${id}`, fields).then(res => res.data)
}

