import { Router } from 'express'

import { UserController } from '../controllers'

const usersRouter = Router()

usersRouter.post('/', UserController.store)

export default usersRouter
