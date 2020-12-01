import styled from 'styled-components'
import Image from 'next/image'

export const Wrapper = styled.header`
  padding: 20px;
  width: 100%;
`

export const MainHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const Options = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
  }
`

export const RegisterLink = styled.a`
  color: var(--black-color);
  text-transform: uppercase;
  font-weight: 500;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.75;
  }
`

export const LoginLink = styled.a`
  color: var(--black-color);
  text-transform: uppercase;
  font-weight: 500;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.75;
  }
`

export const LogoutButton = styled.a`
  color: var(--black-color);
  text-transform: uppercase;
  font-weight: 500;
  transition: opacity 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`

export const Navbar = styled.nav`
  margin-bottom: 10px;
`

export const NavbarList = styled.ul`
  display: flex;
  justify-content: space-around;

  .active {
    font-weight: 500;
  }
`

export const NavbarListItemLink = styled.a`
  color: var(--black-color);
  text-transform: uppercase;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.75;
  }
`

export const ProfileImage = styled(Image)`
  background-color: var(--white-color);
  border-radius: 50%;
  padding: 1px;
  border: 2px solid;
  border-color: #31353d80;
  cursor: pointer;
  transition: border-color 0.4s ease;

  &:hover {
    border-color: var(--black-color);
  }
`
