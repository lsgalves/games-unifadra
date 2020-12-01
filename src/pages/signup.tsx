import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import Link from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'
import InputMask from 'react-input-mask'
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

  .phone {
    padding: 8px 16px;
    width: 100%;
    border: 2px solid var(--red-color);
    font-size: 1em;
    color: var(--black-color);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(239, 7, 91, 0.25);
    }
  }
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
  name: string
  phone: string
  email: string
  username: string
  password: string
}

const SignupPage = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, errors, control } = useForm<Inputs>()
  const router = useRouter()
  const { user, signUp, signIn } = useAuth()

  useEffect(() => {
    if (user) router.push('/')
  }, [user])

  const onSubmit = async (data: Inputs) => {
    setLoading(true)
    try {
      console.log(data)
      await signUp(data)
      await signIn(data.email, data.password)
      router.push('/')
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout title="Cadastre-se">
      <Wrapper>
        <Container>
          <FormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Legend>Crie sua conta</Legend>
              <FormGroup>
                <Label htmlFor="name" style={{ marginBottom: '20px' }}>Nome</Label>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  autoFocus
                  ref={register({
                    required: 'O campo é obrigatório.',
                  })}
                />
                <FieldValidationError errors={errors} name="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone" style={{ marginBottom: '20px' }}>Número do celular</Label>
                <Controller
                  className="phone"
                  as={InputMask}
                  control={control}
                  mask="(99) 99999-9999"
                  name="phone"
                  type="text"
                  rules={{ required: 'O campo é obrigatório.', validate: (value) => value.replace(/[\W|_]/g, '').length  === 11 }}
                />
                <FieldValidationError errors={errors} name="phone" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email" style={{ marginBottom: '20px' }}>E-mail</Label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  ref={register({
                    required: 'O campo é obrigatório.',
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                  })}
                />
                <FieldValidationError errors={errors} name="email" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="username" style={{ marginBottom: '20px' }}>Username</Label>
                <Field
                  id="username"
                  type="text"
                  name="username"
                  ref={register({
                    required: 'O campo é obrigatório.',
                  })}
                />
                <FieldValidationError errors={errors} name="username" />
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
              <FormButton type="submit">{loading ? <Loader type="Oval" color="#F7FBFA" height={16} width={16} /> : 'Criar conta'}</FormButton>
              <Error role="alert">{error}</Error>
              <ToRegister>Já tem uma conta? <Link href="/login"><a>Entrar</a></Link></ToRegister>
            </form>
          </FormWrapper>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default SignupPage
