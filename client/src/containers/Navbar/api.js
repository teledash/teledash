import axios from 'axios'

export function createDashboard(url) {
  return axios.get(url).then(({data}) => data)
}
