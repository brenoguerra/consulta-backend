import { Router } from 'express'

import { QueryController } from '../controllers'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const queriesRouter = Router()

queriesRouter.post('/', ensureAuthenticated, QueryController.find)

export default queriesRouter
