import React from 'react'
import styled from 'styled-components'
import { FieldErrors } from 'react-hook-form'

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
`

export const Field = styled.input`
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
`

export const Legend = styled.legend`
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 1.5em;
`

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`

const ErrorWrapper = styled.span`
  font-size: 90%;
  margin-top: .45rem;
`

export const FormGroup = ({ children, ...props }: any) => (
  <div>
    <Fieldset {...props}>{children}</Fieldset>
  </div>
)

export const FieldValidationError = ({ errors, name }: {
  errors: FieldErrors
  name: string
}) => {
  const filedError = errors[name]
  return filedError ? <ErrorWrapper role="alert">{filedError.message}</ErrorWrapper> : null
}
