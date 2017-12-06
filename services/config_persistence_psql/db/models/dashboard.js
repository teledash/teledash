import Sequelize from 'sequelize'
import db from '../db'

export default db.define('dashboard', {
  name: Sequelize.STRING,
  window_tree: Sequelize.JSON,
  window_count: Sequelize.INTEGER
});
