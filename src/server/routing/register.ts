import {Request, Response} from 'express'
import { accountAllreadyExists, invalidValue } from '../helpers/messages'

import { IUser } from '../models/types'
import bcrypt from 'bcrypt'
import express from 'express'
import { generateToken } from '../helpers/generateToken'
import {queries} from '../services/queries'
import { validationChecks } from '../helpers/validationChecks'
import { validationResult } from 'express-validator'

export const register = express.Router()

register.post('/', validationChecks, async (req: Request, res: Response) => {

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422).json(invalidValue)
  }

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
