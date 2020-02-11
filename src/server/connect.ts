import {Sequelize} from 'sequelize'
const connect = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
)

export default connect
