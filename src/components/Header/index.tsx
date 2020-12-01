import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useAuth } from '../../hooks/useAuth'

import Title from '../Title'
import { Container, LinkButton, SimpleButton } from '../Common'
import * as S from './styles'

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
  const { user, signOut } = useAuth()

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <S.Wrapper>
      <Container>
        <Options>
          <Link href="/">
            <a>
              <Title>GamesUnifadra</Title>
            </a>
          </Link>
          {user
          ? <SimpleButton type="button" onClick={handleLogout}>Sair</SimpleButton>
          : <Link href="/login" passHref><LinkButton>Entrar</LinkButton></Link>}
        </Options>
      </Container>
    </S.Wrapper>
  )
}

export default Header
