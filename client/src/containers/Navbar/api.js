import axios from 'axios'

export function createDashboard() {

  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve({ id: 3, tree: [], name: 'Fake name', windowCount: 0 }),0)
  })

  // return axios.get(url).then(({data}) => data)
}
