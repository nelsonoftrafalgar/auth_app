import { IUser } from '../models/types'
import bcrypt from 'bcrypt'
import express from 'express'
import { generateToken } from '../helpers/generateToken'
import { invalidCredentials } from '../helpers/messages'
import { queries } from '../services/queries'

export const login = express.Router()

login.post('/', async (req, res, next) => {

  const {email, password} = req.body
  const user: IUser = await queries.select({email})

  const match = await bcrypt.compare(password, user.password)

  if (!user || !match) {
    res.status(404).json(invalidCredentials)
  } else {
    const token = generateToken({user})
    res.status(201).json({token})
  }
})
