import { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import AuthProvider from '../utils/auth'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
