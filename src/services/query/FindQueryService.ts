import QueryRepository from './repositories/QueryRepository'
import AppError from '../../errors/AppError'

interface Request {
  type: string;
  filter: string;
}

class CreateSessionService {
  public async execute(data: Request): Promise<Response> {
    const queryRepository = new QueryRepository()

    if (!data.filter || !data.type) throw new AppError('Faltou algum parametro...')

    return await queryRepository.find(data)
  }
}

export default CreateSessionService
