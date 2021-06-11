import { Router } from 'express'

import { UserController } from '../controllers'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import mustBeAdmin from '../middlewares/mustBeAdmin'

const usersRouter = Router()

usersRouter.post('/', ensureAuthenticated, mustBeAdmin, UserController.store)

export default usersRouter
