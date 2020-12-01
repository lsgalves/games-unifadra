import React from 'react'
import { GlitchTitle } from './styles'

const Title = ({ children }: { children: string }) => {
  return <GlitchTitle text={children}>{children}</GlitchTitle>
}

export default Title
