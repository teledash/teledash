import axios from 'axios'

function createDashboard() {
  return axios.post('/api/dashboards').then(res => res.data)
}

function updateDashboard(fields, id) {
  return axios.put(`/api/dashboards/${id}`, fields).then(res => res.data)
}

function getDashboards() {
  return axios.get('/api/dashboards').then(res => res.data)
}

export default {
  createDashboard,
  updateDashboard,
  getDashboards
}
