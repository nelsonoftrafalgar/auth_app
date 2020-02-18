import { IUser } from '../models/types'
import { Secret } from 'jsonwebtoken'
import User from '../models/user'
import bcrypt from 'bcrypt'
import express from 'express'
import jwt from 'jsonwebtoken'
import { tokenStorage } from '../services/tokenStorage'

export const login = express.Router()

login.post('/', async (req, res, next) => {

  const {email, password} = req.body

  const user: IUser = await User.findOne({
    attributes: ['*'],
    where: {
      email,
    },
    raw: true
  })

  const match = await bcrypt.compare(password, user.password)

  if (!user || !match) {
    res.status(404).json({msg: 'invalid credentials'})
  } else {
    const token = jwt.sign({user}, process.env.PRIVATE_KEY as Secret)
    tokenStorage.insertToken(token)
    res.status(201).json({token})
  }
})
