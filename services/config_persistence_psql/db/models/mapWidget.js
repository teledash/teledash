import Sequelize from 'sequelize'
import db from '../db'

export default db.define('mapWidget', {
  markerLat: Sequelize.STRING,
  markerLong: Sequelize.STRING
})

