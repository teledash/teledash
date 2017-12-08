import Sequelize from 'sequelize'
import db from '../db'

export default db.define('datasource', {
  name: Sequelize.STRING,
  type: Sequelize.ENUM('json', 'video'),
  url: Sequelize.STRING,
  refresh: Sequelize.INTEGER
})
