import Sequelize from 'sequelize'
import db from '../db'
import generateName  from '../../modules/name-generator'

export default db.define('dashboard', {
  name: Sequelize.STRING,
  tree: {
    type: Sequelize.JSON,
    notNull: true,
    defaultValue: {}
  },
  windowCount: {
    type: Sequelize.INTEGER,
    notNull: true,
    defaultValue: 0
  }
}, {
    hooks: {
      beforeCreate(instance) {
        if (!instance.name)
          instance.name = generateName() + ' Dashboard'
        return instance
      }
    }
  })
