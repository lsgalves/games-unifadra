import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'
import Loader from 'react-loader-spinner'
import { useAuth } from '../hooks/useAuth'

import Layout from '../components/Layout'
import { Label, Field, Legend, FormGroup, FormButton, FieldValidationError, Container } from '../components/Common'

const Wrapper = styled.div`
  padding: 20px;
`

const FormWrapper = styled.div`
  margin: 40px auto;
  width: 100%;

  ${media.greaterThan('small')`
    padding: 40px;
    border: 1px solid var(--white-color);
    border-radius: 4px;
    background-color: var(--black-color);
    max-width: 450px;
  `}
`

const ToRegister = styled.span`
  display: inline-block;
  text-align: center;
  width: 100%;
  margin-top: 40px;
`

const Error = styled.span`
  font-size: 90%;
`

type Inputs = {
  user: string
  password: string
}

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, errors } = useForm<Inputs>()
  const router = useRouter()
  const { user, signIn } = useAuth()

  useEffect(() => {
    if (user) router.push('/')
  }, [user])

  const onSubmit = async ({ user, password }: Inputs) => {
    setLoading(true)
    try {
      await signIn(user, password)
      router.push('/')
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout title="Entrar">
      <Wrapper>
        <Container>
          <FormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Legend>Acesse sua conta</Legend>
              <FormGroup>
                <Label htmlFor="user" style={{ marginBottom: '20px' }}>Username ou endereço de e-mail</Label>
                <Field
                  id="user"
                  type="text"
                  name="user"
                  autoFocus
                  ref={register({
                    required: 'O campo é obrigatório.',
                  })}
                />
                <FieldValidationError errors={errors} name="user" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password" style={{ marginBottom: '20px' }}>Senha</Label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  ref={register({
                    required: 'O campo é obrigatório.',
                  })}
                />
                <FieldValidationError errors={errors} name="password" />
              </FormGroup>
              <FormButton type="submit">{loading ? <Loader type="Oval" color="#F7FBFA" height={16} width={16} /> : 'Entrar'}</FormButton>
              <Error role="alert">{error}</Error>
              <ToRegister>Não tem uma conta? <Link href="/signup"><a>Registre-se</a></Link></ToRegister>
            </form>
          </FormWrapper>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default LoginPage
