import { NextApiRequest, NextApiResponse } from 'next'
import { Middleware } from 'next-connect'
import { getSession } from './session'

const authMiddleware: Middleware<NextApiRequest, NextApiResponse> = async (
  req,
  res,
  next
) => {
  const session = await getSession(req)
  return session
    ? next()
    : res.status(401).json({
        message:
          'Você não tem permissão para acessar este recurso. Realize o login e tente novamente.',
      })
}

export default authMiddleware
