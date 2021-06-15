import { Request, Response } from 'express'

import FindQueryService from '../services/query/FindQueryService'

class QueryController {
  async find(request: Request, response: Response) {
    const queryController = new FindQueryService()
    const findQuery = await queryController.execute(request.body)

    return response.json({
      message: 'Query done',
      data: findQuery
    })
  }
}

export default new QueryController()
