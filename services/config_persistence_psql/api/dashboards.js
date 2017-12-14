import express from 'express'
import { Dashboard } from '../db/models'
const router = express.Router()

// GET api/dashboards
router.get('/',  (req, res, next) => {
  Dashboard.findAll()
    .then(dashboards => {
      const dashboardsAsObject = dashboards.reduce((acc, val) => {
        acc[val.id] = val
        return acc
      }, {})

      res.json(dashboardsAsObject)
    })
    .catch(next)
})

// POST api/dashboards
router.post('/', (req, res, next) => {
  Dashboard
    .create(req.body)
    .then(dashboard => res.json(dashboard))
    .catch(next)
})

// PUT api/dashboards
router.put('/:id', ({ body, params }, res, next) => {
  Dashboard.update(body, {
      where: { id: params.id },
      returning: true, // needed for affectedRows to be populated
      plain: true // makes sure that the returned instances are just plain objects
  })
    .spread((numberOfAffectedRows, affectedRows) => res.send(affectedRows))
    .catch(next)
})

// DELETE api/dashboards
router.delete('/:id', ({ params }, res, next) => {
  Dashboard
    .destroy({ where: { id: params.id } })
    .then(() => res.json(+params.id))
    .catch(next)
})

export default router
