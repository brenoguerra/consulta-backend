import { IUser } from '../models/User'

export default interface IUserRepository {
  create(data: IUser): Promise<IUser>;
}
