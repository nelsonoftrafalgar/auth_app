require('dotenv').config()

import {login, logout, register, verify} from './routing'

import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import path from 'path'

const port = 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('dist'))

app.use('/login', login)
app.use('/register', register)
app.use('/verify', verify)
app.use('/logout', logout)

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
