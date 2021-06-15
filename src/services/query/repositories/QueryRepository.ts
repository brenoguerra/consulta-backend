import IQueryRepository from '../../../repositories/IQueryRepository'
import axios from 'axios'
import AppError from '../../../errors/AppError'

interface Request {
  type: string;
  filter: string;
}

class QueryRepository implements IQueryRepository {
  public async find(data: Request): Promise<any> {
    const queryResult = await axios.get(`http://k1bx1oq1.srv-172-106-0-115.webserverhost.top/baseapi@_/basesaldo.php?consultar=${data.filter}&tipo=${data.type.toLowerCase()}`)
    const queryData = queryResult.data

    if (queryData.retorno === 'ERRO') throw new AppError(queryData.msg)

    if (queryData.msg && queryData.msg.length) {
      return queryData.msg
    }

    throw new AppError('Nenhum resultado encontrado')
  }
}

export default QueryRepository
