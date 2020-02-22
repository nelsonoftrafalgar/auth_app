import {Request, Response} from 'express'
import { invalidCredentials, invalidValue } from '../helpers/messages'

import { IUser } from '../models/types'
import bcrypt from 'bcrypt'
import express from 'express'
import { generateToken } from '../helpers/generateToken'
import { queries } from '../services/queries'
import { validationChecks } from '../helpers/validationChecks'
import {validationResult} from 'express-validator'

export const login = express.Router()

login.post('/', validationChecks, async (req: Request, res: Response) => {

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422).json(invalidValue)
  }

  const {email, password} = req.body
  const user: IUser = await queries.select({email})

  if (!user) {
    res.status(404).json(invalidCredentials)
  } else {
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      res.status(404).json(invalidCredentials)
    } else {
      const token = generateToken({user})
      res.status(201).json({token})
    }
  }
})
