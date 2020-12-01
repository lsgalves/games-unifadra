import { GetStaticProps } from 'next'
import styled from 'styled-components'
import media from 'styled-media-query'
import spreadsheet from '../utils/spreadsheet'
import { gameTransformer, playerTransformer } from '../app/transformers'
import { Game } from '../app/models'
import { useAuth } from '../hooks/useAuth'

import Layout from '../components/Layout'
import IndividualGame from '../components/Game/Individual'
import { Container } from '../components/Common'

const GamesFont = styled.h2`
  display: inline;
  font-weight: 600;
  font-size: 2em;
`

const GamesWrapper = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  ${media.lessThan('medium')`
    justify-content: center;
  `}
`

type Props = {
  games: Game[]
}

const IndexPage = ({ games }: Props) => {
  const { user } = useAuth()

  return (
    <Layout>
      <Container>
        <GamesFont>Jogos</GamesFont>
        <GamesWrapper>
          {games.map(game => !game.is_team && <IndividualGame isEnrolled={game.players?.findIndex((player) => player.user_id === user?.id) !== -1} key={game.id} game={game} />)}
        </GamesWrapper>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const games = await spreadsheet.findAll('games')

  for (const game of games) {
    const gamePlayers = await spreadsheet.find('players', (player => player.game_id == game.id))
    game.players = gamePlayers.map(playerTransformer)
    game.num_players = gamePlayers.length
  }

  return { props: { games: games.map(gameTransformer) }, revalidate: 1 }
}

export default IndexPage
