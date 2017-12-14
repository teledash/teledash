import axios from 'axios'

function getDatasources() {
  return axios.get('/api/datasources').then(res => res.data)
}

export default {
  getDatasources
}
