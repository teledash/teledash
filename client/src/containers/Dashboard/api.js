import axios from 'axios'

function getDashboards() {
  return axios.get('/api/dashboards').then(res => res.data)
}

export default {
  getDashboards
}
