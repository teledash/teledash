import express from 'express'
import { Widget, MapWidget, LineGraphWidget } from '../../db/models'
import createWidget from './createWidget'

const router = express.Router();

// GET api/widgets
router.get('/', (req, res, next) => {
  Widget.findAll({
    include: [
      {
        model: MapWidget, attributes: [
          'mapCenterLat',
          'mapCenterLong',
          'markerLat',
          'markerLong'
        ]
      },
      {
        model: LineGraphWidget, attributes: [
          'xValue',
          'yValue',
          'xLabel',
          'yLabel'
        ]
      }
    ]
  }).then(widgets => {
    // Reshape widgets response to be more ideal to for the client app to
    // work with.
    // FIXME: Figured out how to do this with Sequelize instead!
    const mappedWidgets = widgets.map(widget => {
      // JSON hack needed to 'decycle' circular reference
      // FIXME: Find better way!
      const {
        mapWidget,
        lineGraphWidget,
        ...rest
      } = JSON.parse(JSON.stringify(widget))

      if (widget.mapWidget) return { ...rest, extraFields: mapWidget }
      if (widget.lineGraphWidget)
        return { ...rest, extraFields: lineGraphWidget }

      return rest
    })

    res.json(mappedWidgets)
  })
})

// POST api/widgets
router.post('/', (req, res, next) => {
  // TODO: PERSIST POSITION
  // const widget = Widget.build(req.body)
  // widget.getDashboard({ attributes: ['windowCount'] })
  //   .then(({ windowCount }) => {
  // We want the array index for position field.
  // positions are used as non-zero index values in the dashboard.
  createWidget(req.body)
    .then(widget => res.json(widget))
    .catch(next)
  // })

})

// PUT api/widgets
router.put('/:id', ({ body, params }, res, next) => {
  Widget.update(body, {
    where: { id: params.id },
    returning: true, // needed for affectedRows to be populated
    plain: true // makes sure that the returned instances are just plain objects
  })
    .spread((numberOfAffectedRows, affectedRows) => res.send(affectedRows))
    .catch(next)
})

// DELETE api/widgets
router.delete('/:id', (req, res, next) => {
  res.send('TODO')
})

export default router
