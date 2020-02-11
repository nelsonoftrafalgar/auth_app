import { IUser } from '../models/types'
import User from '../models/user'
import express from 'express'

const register = express.Router()

register.post('/', async (req, res, next) => {

  const {email, password} = req.body

  const user: IUser = await User.findOne({
    attributes: ['*'],
    where: {
      email,
      password
    },
    raw: true
  })

  if (user) {
    res.status(409).json({msg: 'account allready exists'})
  }

})

export default register