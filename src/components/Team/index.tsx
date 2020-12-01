import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Team } from '../../app/models'

import { Wrapper, TextWrapper, Name, Leader } from './styles'

type Props = {
  team: Team
}

const Team = ({ team }: Props) => (
  <Link href={`/teams/${team.slug}`}>
    <a>
      <Wrapper>
        <Image src={team.logo} width={32} height={32} />
        <TextWrapper>
          <Name>{team.name}</Name>
          <Leader>Líder: <span>{team?.leader?.name} ({team?.leader?.username})</span></Leader>
        </TextWrapper>
      </Wrapper>
    </a>
  </Link>
)

export default Team
