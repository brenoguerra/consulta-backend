import { Request, Response } from 'express'

import CreateUserService from '../services/user/CreateUserService'

class UserController {
  async store(request: Request, response: Response) {
    try {
      const userService = new CreateUserService()
      const createdUser = await userService.execute(request.body)

      return response.json({
        message: 'User created',
        data: createdUser
      })
    } catch (error) {
      return response.status(400).json({
        error: error.message
      })
    }
  }
}

export default new UserController()
