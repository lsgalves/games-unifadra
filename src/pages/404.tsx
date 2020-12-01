import Link from 'next/link'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
`

const Message = styled.p`
  font-weight: 600;
  font-size: 1.5em;
  margin-bottom: 20px;
`

const NotFoundPage = () => (
  <Layout title="Página não encontrada">
    <Wrapper>
      <Message>Página não encontrada!</Message>
      <Link href="/">
        <a>Voltar para a tela inicial</a>
      </Link>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
