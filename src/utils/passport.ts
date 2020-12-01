import { NextApiRequest, NextApiResponse } from 'next'
import passport from 'passport'
import Local from 'passport-local'
import argon2 from 'argon2'
import spreadsheet from './spreadsheet'
import { userTransformer } from '../app/transformers'

export const localStrategy = new Local.Strategy(
  { usernameField: 'user' },
  async (username, password, done) => {
    const where = (user: any) =>
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(username)
        ? user.email === username
        : user.username === username

    const [user] = await spreadsheet.find('users', where)

    if (!user) {
      return done(new Error('Usuário não encontrado.'))
    }

    if (!(await argon2.verify(user.password, password))) {
      return done(new Error('Senha incorreta.'))
    }

    const parsedUser = userTransformer(user)
    delete parsedUser.password

    done(null, parsedUser)
  }
)

export const authenticate = (
  method: string | passport.Strategy,
  req: NextApiRequest,
  res: NextApiResponse
) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res)
  })
