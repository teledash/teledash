function fetcher(endpoint, refresh) {
  let intervalId

  return {
    start(refresh) {
// if(!intervalId) {
//     intervalId = setInterval(() => {
//   const randomY = Math.random() > 0.4 ? Math.random() : -Math.random()
//   const coord = {
//     x: this.state.data[this.state.data.length - 1].x + 1,
//     y: this.state.data[this.state.data.length - 1].y + randomY
//   }
//   // this.setState({
//   //   data: [...this.state.data, coord]
//   // })
//   }, 5000)
// }
    },

    stop() {
      if(intervalId) clearInterval(intervalId)
    }
  }
}





    // this.state = {
    //   data: [{ x: 0, y: 8 }],
    // }
