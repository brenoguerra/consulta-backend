import 'reflect-metadata'
import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import './database'
import routes from './routes'

const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Server running at ${PORT}`))
