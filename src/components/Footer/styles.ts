import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  padding: 20px;
  display: flex;
  align-items: center;

  ${media.lessThan('small')`
    font-size: 14px;
  `}
`

export const UnifadraLogoWrapper = styled.a`
  color: var(--black-color);
  display: flex;
  align-items: center;

  img {
    transition: filter 0.2s ease;
    filter: grayscale(100%);
  }

  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
`

export const CopyrightText = styled.span`
  opacity: 0.75;
  margin-left: 20px;
`
