import express from 'express'
import { Widget } from '../db/models'

const router = express.Router();

// GET api/widgets
router.get('/', (req, res, next) => {
  res.send('TODO')
})

// POST api/widgets
router.post('/', (req, res, next) => {
  // TODO: PERSIST POSITION
  // const widget = Widget.build(req.body)
  // widget.getDashboard({ attributes: ['windowCount'] })
  //   .then(({ windowCount }) => {
      // We want the array index for position field.
      // positions are used as non-zero index values in the dashboard.
      Widget
        .create({ ...req.body })
        .then(widget => res.json(widget))
        .catch(next)
    // })

})

// PUT api/widgets
router.put('/:id', (req, res, next) => {
  res.send('TODO')
})

// DELETE api/widgets
router.delete('/:id', (req, res, next) => {
  res.send('TODO')
})

export default router
