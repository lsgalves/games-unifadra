export interface Game {
  id: number
  slug: string
  name: string
  banner_url: string
  date: string
  time: string
  max_players: number
  active: boolean
  is_team: boolean
  num_players?: number | null
  players?: Player[]
  team_size?: number | null
  teams?: Team[]
}

export interface User {
  id: string
  email: string
  username: string
  name: string
  phone: string
  password?: string
  token?: string
  subscriptions?: Game[]
  teams?: Team[]
}

export interface Team {
  id: string
  name: string
  slug: string
  logo: string
  leader_id: string
  leader?: User
  players?: User[]
}

export interface Player {
  id: string
  game_id: string
  user_id?: string | null
  team_id?: string | null
}
