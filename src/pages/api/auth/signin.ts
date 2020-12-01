import { NextApiRequest, NextApiResponse } from 'next'
import passport from 'passport'
import nc from 'next-connect'
import { authenticate, localStrategy } from '../../../utils/passport'
import { encryptSession } from '../../../utils/session'
import { setTokenCookie } from '../../../utils/cookies'

const handler = nc<NextApiRequest, NextApiResponse>()

passport.use(localStrategy)
handler.use(passport.initialize())

handler.post(async (req, res) => {
  try {
    const session: any = await authenticate('local', req, res)
    const token = await encryptSession(session)

    setTokenCookie(res, token)
    return res.json(session)
  } catch (error) {
    return res.status(401).json({ message: error.message })
  }
})

export default handler
