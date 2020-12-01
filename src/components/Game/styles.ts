import styled, { css } from 'styled-components'
import { CalendarEvent, TimeFive, User } from '@styled-icons/boxicons-regular'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: var(--white-color);
  color: var(--black-color);
  transition: all 0.3s ease-out;

  &:hover {
    transform: translateY(10px);
  }

  img {
    width: 100%;
  }
`

export const Title = styled.strong`
  font-weight: 700;
  font-size: 1.5em;
  margin-bottom: 10px;
`

export const InfoWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const GameDataWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0px;
`

export const GameDataText = styled.span`
  margin-right: 5px;
  font-weight: 500;
`

export const SubscribeButton = styled.button`
  background: var(--red-color);
  text-transform: uppercase;
  color: var(--white-color);
  align-self: flex-end;
  padding: 5px 15px;
  border: none;
  outline: 0;
  cursor: pointer;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.85;
  }

  &:active,
  &:focus {
    opacity: 1;
    box-shadow: 0 0 0 0.2rem rgba(239, 7, 91, 0.25);
    outline: 0;
  }
`

const iconStyles = css`
  fill: var(--black-color);
  width: 24px;
  height: 24px;
`

export const CalendarIcon = styled(CalendarEvent)`
  ${iconStyles}
`

export const TimeIcon = styled(TimeFive)`
  ${iconStyles}
`

export const UserIcon = styled(User)`
  ${iconStyles}
`
