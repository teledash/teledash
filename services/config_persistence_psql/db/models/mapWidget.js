import Sequelize from 'sequelize'
import db from '../db'

export default db.define('mapWidget', {
  mapCenterLat: Sequelize.STRING,
  mapCenterLong: Sequelize.STRING,
  markerLat: Sequelize.STRING,
  markerLong: Sequelize.STRING
})

