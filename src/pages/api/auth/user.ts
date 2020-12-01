import { NextApiHandler } from 'next'
import { getSession } from '../../../utils/session'

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession(req)

  return session
    ? res.json(session)
    : res.status(404).json({ message: 'Usuário não encontrado.' })
}

export default handler
