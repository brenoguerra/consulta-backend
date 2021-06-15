import 'reflect-metadata'
import 'dotenv/config'

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import AppError from './errors/AppError'

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

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Server running at ${PORT}`))
