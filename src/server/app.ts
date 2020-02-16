require('dotenv').config()

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import login from './routing/login'
import path from 'path'
import register from './routing/register'
import verify from './routing/verify'

const port = 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.static('dist'))

app.use('/login', login)
app.use('/register', register)
app.use('/verify', verify)

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
