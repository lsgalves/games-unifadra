import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import authMiddleware from '../../../utils/authMiddleware'
import { removeTokenCookie } from '../../../utils/cookies'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.use(authMiddleware)

handler.post(async (_req, res) => {
  removeTokenCookie(res)
  res.writeHead(302, { Location: '/' })
  return res.end()
})

export default handler
