import { Request, Response } from 'express'

import FindQueryService from '../services/query/FindQueryService'

class QueryController {
  async find(request: Request, response: Response) {
    try {
      const queryController = new FindQueryService()
      const findQuery = await queryController.execute(request.body)

      return response.json({
        message: 'Query done',
        data: findQuery
      })
    } catch (error) {
      return response.status(400).json({
        error: error.message
      })
    }
  }
}

export default new QueryController()
