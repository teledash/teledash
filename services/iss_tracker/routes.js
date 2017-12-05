import express from 'express'
const router = express.Router();

const lineGraphData = { x: 0, y: 8 }

function simulateLineGraphData() {
  setInterval(() => {
  const randomY = Math.random() > 0.4 ? Math.random() : -Math.random()
   lineGraphData.x += 1
   lineGraphData.y += randomY
  }, 2000)
}

simulateLineGraphData()

router.get('/lineGraph', (req, res) => {
  res.json(lineGraphData)
})

export default router
