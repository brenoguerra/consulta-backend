import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import AppError from '../errors/AppError'

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers.authorization

  if (!authHeader) throw new AppError('Token inválido', 401)

  const [, token] = authHeader.split(' ')

  try {
    const { sub } = verify(token, process.env.JWT_SECRET!) as TokenPayload

    request.user = {
      id: sub
    }

    return next()
  } catch {
    throw new AppError('Token inválido', 401)
  }
}
