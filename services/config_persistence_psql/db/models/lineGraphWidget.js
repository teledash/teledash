import Sequelize from 'sequelize'
import db from '../db'

export default db.define('lineGraphWidget', {
  x: Sequelize.STRING,
  y: Sequelize.STRING,
  xLabel: Sequelize.STRING,
  yLabel: Sequelize.STRING,
})
