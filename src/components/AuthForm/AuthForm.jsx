import React, { Fragment } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import * as S from './styles'
import Button from '../Button/Button'

function AuthForm({
  values,
  onSubmit,
  onChange,
  errors,
  isValid,
  submitSuccessMSG,
}) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <S.PopupArea>
      <S.AuthForm onSubmit={onSubmit} noValidate>
        <Logo $isBlackText="black" />
        <S.FormInputFirst
          type="email"
          name="email"
          placeholder="email"
          value={values.email || ''}
          onChange={(event) => onChange(event)}
          required
        />
        <S.FormSpan $isValid={isValid}>{errors.email}</S.FormSpan>
        <S.FormInput
          type="password"
          name="password"
          value={values.password || ''}
          onChange={(event) => onChange(event)}
          placeholder="Пароль"
          minLength="8"
          required
        />
        <S.FormSpan $isValid={isValid}>{errors.password}</S.FormSpan>
        {pathname !== '/signin' && (
          <>
            <S.FormInput
              type="password"
              name="repeat_password"
              placeholder="Повторите пароль"
              minLength="8"
              value={values.repeat_password || ''}
              onChange={(event) => onChange(event)}
              required
            />
            <S.FormSpan $isValid={isValid}>{errors.repeat_password}</S.FormSpan>
            <S.FormInput
          type="text"
          name="name"
          value={values.name || ''}
          onChange={(event) => onChange(event)}
          placeholder="Имя (необязательно)"
          minLength="2"
         
        />
        <S.FormSpan $isValid={isValid}>{errors.name}</S.FormSpan>
        <S.FormInput
          type="text"
          name="surname"
          value={values.surname || ''}
          onChange={(event) => onChange(event)}
          placeholder="Фамилия (необязательно)"
          minLength="2"
         
        />
        <S.FormSpan $isValid={isValid}>{errors.surname}</S.FormSpan>
        <S.FormInput
          type="text"
          name="city"
          value={values.city || ''}
          onChange={(event) => onChange(event)}
          placeholder="Город (необязательно)"
          minLength="2"
         
        />
        <S.FormSpan $isValid={isValid}>{errors.city}</S.FormSpan>
          </>
        )}

        <S.FormSpanSubmit $isValid={isValid}>
          {submitSuccessMSG}
        </S.FormSpanSubmit>
        <S.FormButton type="submit" disabled={!isValid}>
          {pathname === '/signin' ? 'Войти' : 'Зарегистрироваться'}
        </S.FormButton>

        {pathname === '/signin' && (
          <S.FormButtonRegister
            type="button"
            title="Перейти к регистрации."
            onClick={() => navigate('/signup')}
          >
            Зарегистрироваться
          </S.FormButtonRegister>
        )}
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default AuthForm
