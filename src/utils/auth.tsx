import React, { useState, useEffect, createContext } from 'react'
import { User } from '../app/models'
import request from './request'

type Props = {
  children: React.ReactNode
}

type UserData = {
  name: string;
  username: string;
  email: string;
  password: string;
  phone: string;
}

interface AuthContextData {
  user: User | null
  signIn: (user: string, password: string) => Promise<User>
  signUp: (userData: UserData) => Promise<User>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    request.get<User>('/api/auth/user')
      .then(({ data }) => setUser(data))
      .catch(() => {})
  }, [])

  const signIn = async (user: string, password: string) => {
    try {
      const { data } = await request.post<User>('/api/auth/signin', {
        user,
        password
      })
      
      setUser(data)
      return data
    } catch (error) {
      throw error.response.data.message
    }
  }

  const signUp = async (userData: UserData) => {
    try {
      const { data } = await request.post<User>('/api/auth/signup', userData)
      
      setUser(data)
      return data
    } catch (error) {
      throw error.response.data.message
    }
  }

  const signOut = async () => {
    await request.post('/api/auth/signout')
    setUser(null)
  }

  const auth = {
    user,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
