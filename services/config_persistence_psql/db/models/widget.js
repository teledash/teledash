import Sequelize from 'sequelize'
import db from '../db'

export default db.define('widget', {
  name: Sequelize.STRING,
  type: Sequelize.ENUM('video', 'line_graph', 'map'),
  position: Sequelize.INTEGER,
})
