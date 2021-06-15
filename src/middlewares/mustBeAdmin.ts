import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import AppError from '../errors/AppError'

export default async function mustBeAdmin(request: Request, response: Response, next: NextFunction): Promise<void> {
  const user = await User.findById(request.user.id)
  if (!user || user.role !== 'admin') throw new AppError('Sem permissão', 401)

  return next()
}
