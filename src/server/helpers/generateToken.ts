require('dotenv').config()

import jwt, { Secret } from 'jsonwebtoken'

import { IGenerateTokenParams } from '../models/types'
import { tokenStorage } from '../services/tokenStorage'

export const generateToken = (user: IGenerateTokenParams) => {
  const token = jwt.sign(user, process.env.PRIVATE_KEY as Secret)
  tokenStorage.insertToken(token)
  return token
}