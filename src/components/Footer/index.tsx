import React from 'react'
import Image from 'next/image'

import { Wrapper, UnifadraLogoWrapper, CopyrightText } from './styles'
import { Container } from '../Common'

const Footer = () => (
  <Container>
    <Wrapper>
      <UnifadraLogoWrapper href="https://fundec.edu.br/unifadra">
        <Image src='/unifadra.png' layout="intrinsic" width={102} height={75} alt="Unifadra Logo" />
      </UnifadraLogoWrapper>
      <CopyrightText>Todos os direitos reservados</CopyrightText>
    </Wrapper>
  </Container>
)

export default Footer
