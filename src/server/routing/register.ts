require('dotenv').config()

import jwt, { Secret } from 'jsonwebtoken'

import { IUser } from '../models/types'
import User from '../models/user'
import bcrypt from 'bcrypt'
import express from 'express'
import { tokenStorage } from '../services/tokenStorage'

const register = express.Router()

register.post('/', async (req, res, next) => {

  const {email, password} = req.body
  const hashSalt = 8

  const user: IUser = await User.findOne({
    attributes: ['*'],
    where: {
      email,
    },
    raw: true
  })

  if (user) {
    res.status(409).json({msg: 'account allready exists'})
  } else {
    bcrypt.hash(password, hashSalt, async (error, hash) => {
      const newUser = await User.create({email, password: hash})
      if (error) {
        res.status(500).json({msg: error})
      }

      if (newUser) {
        const token = jwt.sign({user: newUser.dataValues}, process.env.PRIVATE_KEY as Secret)
        tokenStorage.insertToken(token)
        res.status(201).json({token})
      }
    })
  }
})

export default register