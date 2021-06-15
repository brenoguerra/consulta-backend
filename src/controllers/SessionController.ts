import { Request, Response } from 'express'

import CreateSessionService from '../services/session/CreateSessionService'

class SessionController {
  async store(request: Request, response: Response) {
    const sessionService = new CreateSessionService()
    const createdSession = await sessionService.execute(request.body)

    return response.json({
      message: 'Session created',
      data: createdSession
    })
  }
}

export default new SessionController()
