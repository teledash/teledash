import Sequelize from 'sequelize'
import db from '../db'

export default db.define('dashboard', {
  name: Sequelize.STRING,
  tree: Sequelize.JSON,
  windowCount: Sequelize.INTEGER
})
