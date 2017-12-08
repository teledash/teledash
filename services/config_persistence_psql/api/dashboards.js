import express from 'express'
import { Dashboard } from '../db/models'
import chalk from 'chalk'
const router = express.Router()

// GET api/dashboards
router.get('/',  function (req, res, next) {
  Dashboard.findAll().then(dashboards => res.json(dashboards))
})

// POST api/dashboards
router.post('/', function (req, res, next) {
  Dashboard.create(req.body).then(dashboard => res.json(dashboard))
})

// PUT api/dashboards
router.put('/:id', function (req, res, next) {
  res.send('TODO')
})

// DELETE api/dashboards
router.delete('/:id', function (req, res, next) {
  res.send('TODO')
})

export default router
