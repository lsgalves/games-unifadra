import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { Game, Player, User } from "./models";

export const gameTransformer = (game: GoogleSpreadsheetRow): Game => ({
  id: game.id,
  slug: game.slug,
  name: game.name,
  banner_url: game.banner_url,
  date: game.date,
  time: game.time,
  max_players: Number(game.max_players),
  active: game.active == "TRUE",
  is_team: game.is_team == "TRUE",
  team_size: game.team_size ? Number(game.team_size) : null,
  num_players: game.num_players ? Number(game.num_players) : null,
  players: game.players || null,
});

export const userTransformer = (user: GoogleSpreadsheetRow): User => ({
  id: user.id,
  email: user.email,
  username: user.username,
  name: user.name,
  phone: user.phone,
  password: user.password,
  token: user.token,
});

export const playerTransformer = (player: GoogleSpreadsheetRow): Player => ({
  id: player.id,
  game_id: player.game_id,
  team_id: player.team_id || null,
  user_id: player.user_id || null,
});
