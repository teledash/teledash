import express from 'express'
const router = express.Router();

// GET api/dashboards
router.get('/', function (req, res, next) {
  res.send('TODO')
})

// POST api/dashboards
router.post('/', function (req, res, next) {
  res.send('TODO')
})

// DELETE api/dashboards
router.delete('/:id', function (req, res, next) {
  res.send('TODO')
})

export default router
