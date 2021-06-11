import { Router } from 'express'

import { QueryController } from '../controllers'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import ensureHaveDate from '../middlewares/ensureHaveDate'

const queriesRouter = Router()

queriesRouter.post('/', ensureAuthenticated, ensureHaveDate, QueryController.find)

export default queriesRouter
