import { useContext } from 'react'
import { AuthContext } from '../utils/auth'

export function useAuth() {
  return useContext(AuthContext)
}
