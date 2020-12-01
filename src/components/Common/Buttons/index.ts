import styled from 'styled-components'

export const FormButton = styled.button`
  color: var(--white-color);
  margin: 20px 0px;
  padding: 12px 12px;
  font-size: 1em;
  font-weight: 600;
  width: 100%;
  background: var(--red-color);
  border: none;
  cursor: pointer;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(239, 7, 91, 0.25);
  }
`

export const SimpleButton = styled.button`
  background-color: var(--red-color);
  color: var(--white-color);
  padding: 5px 20px;
  border: none;
  transition: opacity 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
  &:focus {
    outline: 0;
    opacity: 1;
    box-shadow: 0 0 0 0.2rem rgba(239, 7, 91, 0.25);
  }
`

export const LinkButton = styled.a`
  background-color: var(--red-color);
  color: var(--white-color);
  padding: 5px 20px;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 1;
    box-shadow: 0 0 0 0.2rem rgba(239, 7, 91, 0.25);
  }
`
