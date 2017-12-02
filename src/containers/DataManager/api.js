import axios from 'axios'

export function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('testString')
    }, 500)
  })
}
