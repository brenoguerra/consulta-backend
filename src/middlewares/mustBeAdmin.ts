import { Request, Response, NextFunction } from 'express'
import User from '../models/User'

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default async function mustBeAdmin(request: Request, response: Response, next: NextFunction): Promise<void> {
  const user = await User.findById(request.user.id)
  if (!user || user.role !== 'admin') throw new Error('Sem permissão')

  return next()
}
