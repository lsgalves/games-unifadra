import React from 'react'
import Head from 'next/head'

import Header from '../Header'
import Footer from '../Footer'

import * as S from './styles'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout = ({ children, title }: Props) => (
  <>
    <Head>
      <title>{title
          ? `${title} | Games Unifadra`
          : 'Games Unifadra'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#10111C"></meta>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <S.Wrapper>
      <Header />
      <S.Content>
        {children}
      </S.Content>
      <Footer />
    </S.Wrapper>
  </>
)

export default Layout
