import axios from 'axios'

function getDatasources() {
  return axios.get('/api/datasources').then(res => res.data)
}

function createDatasource(fields) {
  return axios.post('/api/datasources', fields).then(res => res.data)
}

function updateDatasource(fields, id) {
  return axios.put(`/api/datasources/${id}`, fields).then(res => res.data)
}

export default {
  getDatasources,
  createDatasource,
  updateDatasource
}
