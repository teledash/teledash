import Sequelize from 'sequelize'
import db from '../db'

export default db.define('widget', {
  name: Sequelize.STRING,
  // Used to keep the widgets in order for the widgets array in client state
  window_id: Sequelize.INTEGER,
  type: Sequelize.ENUM('video', 'line_graph', 'map'),
  url: Sequelize.STRING,
  refresh: Sequelize.INTEGER
});
