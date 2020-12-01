import { NextApiRequest } from 'next'
import Iron from '@hapi/iron'
import { getTokenCookie } from './cookies'

const TOKEN_SECRET = process.env.SECRET as string

export function encryptSession(session: string) {
  return Iron.seal(session, TOKEN_SECRET, Iron.defaults)
}

export function getSession(req: NextApiRequest) {
  const token = getTokenCookie(req)
  return token && Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
}
