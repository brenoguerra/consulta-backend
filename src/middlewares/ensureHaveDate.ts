import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import AppError from '../errors/AppError'

export default async function ensureHaveDate(request: Request, response: Response, next: NextFunction): Promise<void> {
  const user = await User.findById(request.user.id)

  if (user && user.role && user.role === 'admin') return next()

  if (!user || !user.expireAt || new Date(user.expireAt) < new Date()) throw new AppError('Sem permissão', 401)

  return next()
}
