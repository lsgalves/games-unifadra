import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import { useRouter } from 'next/router'
import { format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import request  from '../../utils/request'
import { useAuth } from '../../hooks/useAuth'
import { Game } from '../../app/models'

import * as S from './styles'

type Props = {
  game: Game
  isEnrolled: boolean
}

const IndividualGame = ({ game, isEnrolled }: Props) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  const handleSubscribe = async () => {
    if (!user) return router.push('/login')
    setLoading(true)
    if (isEnrolled) {
      await request.delete(`/api/games/${game.id}/unsubscribe`)
    } else {
      await request.post(`/api/games/${game.id}/subscribe`)
    }
    router.reload()
  }

  return (
    <S.Wrapper>
      <img src={game.banner_url} alt={game.name} />
      <S.InfoWrapper>
        <S.Title>{game.name}</S.Title>
        <S.GameDataWrapper>
          <S.CalendarIcon title="Data" />
          <S.GameDataText>{format(new Date(game.date), "dd 'de' MMMM", { locale: ptBR })}</S.GameDataText>
        </S.GameDataWrapper>
        <S.GameDataWrapper>
          <S.TimeIcon title="Horário" />
          <S.GameDataText>{format(parse(game.time, "HH':'mm':'ss", new Date()), "HH':'mm")}</S.GameDataText>
        </S.GameDataWrapper>
        <S.GameDataWrapper>
          <S.UserIcon title="Inscritos" />
          <S.GameDataText>{game.num_players ?? 0} inscritos</S.GameDataText>
        </S.GameDataWrapper>
        <S.SubscribeButton type="button" onClick={handleSubscribe} title={isEnrolled ? 'Desinscreva-se' : 'Inscreva-se'}>
          {loading ? <Loader type="Oval" color="#F7FBFA" height={16} width={16} /> : isEnrolled ? 'Desinscrever' : 'Inscreva-se'}
        </S.SubscribeButton>
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default IndividualGame
