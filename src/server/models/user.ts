import Sequelize from 'sequelize'
import connect from '../connect'

const User: any = connect.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
})

export default User
