import User, { IUser } from '../../../models/User'
import IUserRepository from '../../../repositories/IUserRepository'

class UserRepository implements IUserRepository {
  public async create(data: IUser): Promise<IUser> {
    return User.create(data)
  }
}

export default UserRepository
