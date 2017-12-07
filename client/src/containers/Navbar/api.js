// import axios from 'axios'

export function createDashboard() {

  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve({ id: 3, tree: [], name: 'Fake name', windowCount: 0 }), 100)
  })
}

export function updateDashboard(fields, id) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve({ ...fields, id }), 100)
  })
}
  // return axios.get(url).then(({data}) => data)

