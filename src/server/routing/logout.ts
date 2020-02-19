import express from 'express'
import { logoutSuccessful } from '../helpers/messages'
import { tokenStorage } from '../services/tokenStorage'

export const logout = express.Router()

logout.post('/', (req, res) => {
  const {token} = req.body

  tokenStorage.removeToken(token)

  res.status(200).json(logoutSuccessful)
})
