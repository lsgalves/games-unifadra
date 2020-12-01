import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import authMiddleware from '../../../../utils/authMiddleware'
import { getSession } from '../../../../utils/session'
import spreadsheet from '../../../../utils/spreadsheet'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.use(authMiddleware)

handler.delete(async (req, res) => {
  const session = await getSession(req)
  const gameId = req.query.id as string

  const [isRegistered] = await spreadsheet.find(
    'players',
    player => player.user_id == session.id && player.game_id == gameId
  )
  if (!isRegistered) {
    return res.json({
      message: 'O usuário ainda não está inscrito neste jogo.',
    })
  }

  await isRegistered.delete()
  return res.status(204).end()
})

export default handler
