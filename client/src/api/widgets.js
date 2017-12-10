import axios from 'axios'

function createWidget() {
  return axios.post('/api/widgets').then(res => res.data)
}

function updateWidget(fields, id) {
  return axios.put(`/api/widgets/${id}`, fields).then(res => res.data)
}

function getWidgets() {
  return axios.get('/api/widgets').then(res => res.data)
}

export default {
  createWidget,
  updateWidget,
  getWidgets
}
