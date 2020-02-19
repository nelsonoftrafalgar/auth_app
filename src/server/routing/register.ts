import { IUser } from '../models/types'
import { accountAllreadyExists } from '../helpers/messages'
import bcrypt from 'bcrypt'
import express from 'express'
import { generateToken } from '../helpers/generateToken'
import {queries} from '../services/queries'

export const register = express.Router()

register.post('/', async (req, res, next) => {

  const {email, password} = req.body
  const hashSalt = 8
  const user: IUser = await queries.select({email})

  if (user) {
    res.status(409).json(accountAllreadyExists)
  } else {
    bcrypt.hash(password, hashSalt, async (error, hash) => {
      if (error) {
        res.status(500).json({msg: error})
      }

      const newUser = await queries.insert({email, password: hash})
      if (newUser) {
        const token = generateToken({user: newUser.dataValues})
        res.status(201).json({token})
      }
    })
  }
})
