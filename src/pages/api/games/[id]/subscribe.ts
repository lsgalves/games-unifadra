import { GoogleSpreadsheetRow } from 'google-spreadsheet'
import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import { v4 } from 'uuid'
import authMiddleware from '../../../../utils/authMiddleware'
import { getSession } from '../../../../utils/session'
import spreadsheet from '../../../../utils/spreadsheet'
import { playerTransformer } from '../../../../app/transformers'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.use(authMiddleware)

handler.post(async (req, res) => {
  const session = await getSession(req)
  const gameId = req.query.id as string

  const [isRegistered] = await spreadsheet.find(
    'players',
    player => player.user_id == session.id && player.game_id == gameId
  )
  if (isRegistered) {
    return res.json({ message: 'O usuário já está inscrito neste jogo.' })
  }

  const player = await spreadsheet.create('players', {
    id: v4(),
    user_id: session.id,
    game_id: gameId,
  })
  return res.status(201).json(playerTransformer(player as GoogleSpreadsheetRow))
})

export default handler
