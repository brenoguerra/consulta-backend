import UserRepository from './repositories/UserRepository'
import User, { IUser } from '../../models/User'
import { hash } from 'bcryptjs'
import AppError from '../../errors/AppError'

type Request = IUser

class CreateUserService {
  public async execute(data: Request): Promise<IUser> {
    const userRepository = new UserRepository()

    const usernameIsAvailable = await User.findOne({
      username: data.username
    })

    if (usernameIsAvailable) throw new AppError('Nome de usuário em uso')

    const hashedPassword = await hash(data.password, 8)
    data.password = hashedPassword

    return await userRepository.create(data)
  }
}

export default CreateUserService
