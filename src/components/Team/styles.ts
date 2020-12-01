import styled from 'styled-components'

export const Wrapper = styled.div`
  background: var(--white-color);
  padding: 5px;
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0px 0px 5px rgba(247, 251, 250, 0.75);
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Name = styled.h3`
  font-weight: 700;
  font-size: 1.5em;
`

export const Leader = styled.p`
  span {
    color: var(--red-color);
  }
`
