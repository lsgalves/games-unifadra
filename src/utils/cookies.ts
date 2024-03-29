import { NextApiResponse, NextApiRequest } from 'next'
import { serialize, parse } from 'cookie'

const TOKEN_NAME = 'token'
const MAX_AGE = 60 * 60 * 8

export function setTokenCookie(res: NextApiResponse, token: string) {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })

  res.setHeader('Set-Cookie', cookie)
}

export function removeTokenCookie(res: NextApiResponse) {
  const cookie = serialize(TOKEN_NAME, '', {
    maxAge: -1,
    path: '/',
  })

  res.setHeader('Set-Cookie', cookie)
}

export function parseCookies(req: NextApiRequest) {
  if (req.cookies) return req.cookies

  const cookie = req.headers?.cookie
  return parse(cookie || '')
}

export function getTokenCookie(req: NextApiRequest) {
  const cookies = parseCookies(req)
  return cookies[TOKEN_NAME]
}
