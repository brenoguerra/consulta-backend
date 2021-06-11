import { sign } from 'jsonwebtoken'
import { IUser } from '../../../models/User'
import ISessionRepository from '../../../repositories/ISessionRepository'

interface Response {
  user: IUser;
  token: string;
}

class SessionRepository implements ISessionRepository {
  public async create(data: IUser): Promise<Response> {
    const token = sign({}, process.env.JWT_SECRET!, {
      subject: data._id.toString(),
      expiresIn: process.env.JWT_EXPIRES
    })

    return {
      user: data,
      token
    }
  }
}

export default SessionRepository
