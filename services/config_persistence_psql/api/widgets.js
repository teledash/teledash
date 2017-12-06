import express from 'express'
const router = express.Router();

// GET api/widgets
router.get('/', function (req, res, next) {
  res.send('TODO')
})

// POST api/widgets
router.post('/', function (req, res, next) {
  res.send('TODO')
})

// PUT api/widgets
router.put('/:id', function (req, res, next) {
  res.send('TODO')
})

// DELETE api/widgets
router.delete('/:id', function (req, res, next) {
  res.send('TODO')
})

export default router
