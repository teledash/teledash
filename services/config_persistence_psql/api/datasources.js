import express from 'express'
const router = express.Router();
import { Datasource } from '../db'

// GET api/datasources
router.get('/', (req, res, next) => {
  Datasource.findAll()
    .then(datasources => {
      const datasourcesAsObject = datasources.reduce((acc, val) => {
        acc[val.id] = val
        return acc
      }, {})

      res.json(datasourcesAsObject)
    })
    .catch(next)
})

// POST api/datasources
router.post('/', (req, res, next) => {
  Datasource.create({
    ...req.body,
    // FIXME: Make refresh customizable
    refresh: req.body.type === 'video'  ? null : 5000
  }).then(datasource => res.json(datasource))
})

// PUT api/datasources
router.put('/:id', (req, res, next) => {
  res.send('TODO')
})

// DELETE api/datasources
router.delete('/:id', (req, res, next) => {
  res.send('TODO')
})

export default router
