import { accessDenied, accessGranted } from '../helpers/messages'
import jwt, { Secret } from 'jsonwebtoken'

import express from 'express'
import { tokenStorage } from '../services/tokenStorage'

export const verify = express.Router()

verify.post('/', (req, res) => {
  const {decodedToken} = req.body
  jwt.verify(decodedToken, process.env.PRIVATE_KEY as Secret, (error: any) => {
    if (error || !tokenStorage.isActive(decodedToken)) {
      res.status(401).json(accessDenied)
    } else {
      res.status(200).json(accessGranted)
    }
  })
})
