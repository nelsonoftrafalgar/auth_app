import { IUser } from '../models/types'
import User from '../models/user'
import express from 'express'

const login = express.Router()

login.post('/', async (req, res, next) => {

  const {email, password} = req.body

  const user: IUser = await User.findOne({
    attributes: ['*'],
    where: {
      email,
      password
    },
    raw: true
  })

  if (!user) {
    res.status(404).json({msg: 'invalid credentials'})
  }

})

export default login
