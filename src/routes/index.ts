import { Router } from 'express'

import usersRoutes from './users.routes'
import sessionsRoutes from './sessions.routes'
import queriesRoutes from './queries.routes'

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/queries', queriesRoutes)

export default routes
