import express from 'express'
import widgets from './widgets'
import datasources from './datasources'
import dashboards from './dashboards'
const router = express.Router();

router.use('/widgets', widgets)
router.use('/datasources', datasources)
router.use('/dashboards', dashboards)

router.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('Internal Server Error')
})

export default router
