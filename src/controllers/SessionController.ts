import { Request, Response } from 'express'

import CreateSessionService from '../services/session/CreateSessionService'

class SessionController {
  async store(request: Request, response: Response) {
    try {
      const sessionService = new CreateSessionService()
      const createdSession = await sessionService.execute(request.body)

      return response.json({
        message: 'Session created',
        data: createdSession
      })
    } catch (error) {
      return response.status(400).json({
        error: error.message
      })
    }
  }
}

export default new SessionController()
