import { IUser } from '../models/User'

interface Response {
  user: IUser;
  token: string;
}

export default interface ISessionRepository {
  create(data: IUser): Promise<Response>;
}
