import { Router } from 'express'

import { SessionController } from '../controllers'

const sessionsRouter = Router()

sessionsRouter.post('/', SessionController.store)

export default sessionsRouter
