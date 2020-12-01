import { NextApiHandler } from 'next'
import argon2 from 'argon2'
import { v4 } from 'uuid'
import spreadsheet from '../../../utils/spreadsheet'
import { User } from '../../../app/models'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, username, email, password, phone } = req.body

    try {
      const isExistingUser = await validate(req.body)
      if (isExistingUser)
        return res.status(400).json({ message: isExistingUser })

      const passwordHash = await argon2.hash(password)

      const userData = {
        id: v4(),
        email,
        username,
        name,
        phone,
        password: passwordHash,
      }

      await spreadsheet.create('users', userData)

      return res.status(201).json(userData)
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao cadastrar o usuário.' })
    }
  }
}

export default handler

async function validate({ username, email, phone }: User) {
  if (phone.replace(/[\W|_]/g, '').length !== 11)
    return 'Número de celular inválido.'
  const [isExistentUser] = await spreadsheet.find(
    'users',
    user => user.email == email || user.username == username
  )
  if (isExistentUser?.email === email) return 'Esse e-mail já está em uso.'
  if (isExistentUser?.username === username)
    return 'Esse username já está em uso.'
}
