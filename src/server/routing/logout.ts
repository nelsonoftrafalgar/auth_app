import express from 'express'
import { tokenStorage } from '../services/tokenStorage'

export const logout = express.Router()

logout.post('/', (req, res) => {
  const {token} = req.body

  tokenStorage.removeToken(token)

  res.status(200).json({msg: 'logout successful'})
})
