import express from 'express'
import widgets from './widgets'
import datasources from './datasources'
import dashboards from './dashboards'
const router = express.Router();

router.use('/widgets', widgets)
router.use('/datasources', datasources)
router.use('/dashboards', dashboards)

router.use((req, res, next) => {
  res.status(404).send('Not found')
})

export default router
