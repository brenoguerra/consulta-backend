import SessionRepository from './repositories/SessionRepository'
import { compare } from 'bcryptjs'

import User, { IUser } from '../../models/User'

interface Request {
  username: string;
  password: string;
}

interface Response {
  user: IUser;
  token: string;
}

class CreateSessionService {
  public async execute(data: Request): Promise<Response> {
    const sessionRepository = new SessionRepository()

    const user = await User.findOne({ username: data.username })
    if (!user) throw new Error('Credenciais inválidas')

    const isCorrectPassword = await compare(data.password, user.password)
    if (!isCorrectPassword) throw new Error('Credenciais inválidas')

    user.password = ''

    return await sessionRepository.create(user)
  }
}

export default CreateSessionService
