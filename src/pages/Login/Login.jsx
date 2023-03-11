import React, { useState,useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, child, get } from 'firebase/database'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AuthForm from '../../components/AuthForm/AuthForm'
import { StyledLogin } from './styles'
import useFormWithValidation from '../../utils/useFormWithValidation'
import { setUser } from '../../store/slices/userSlices'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [submitSuccessMSG, setSubmitSuccessMSG] = useState('')
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation()
  
  const onLogin = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        password: values.password,
        email: values.email,
    
          
      })
  }
    fetch('http://localhost:8090/auth/login', requestOptions)
    .then(response => response.json())
    .then((data) => {
    
      dispatch(
        setUser({
        
          token: data.access_token,
          refreshToken: data.refresh_token,
     
        })
      )
      return  data
    })
   
      .catch(() => setSubmitSuccessMSG('Такого пользователя не существует'))
  }
 

  

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitSuccessMSG('')
    onLogin()
 
    
    setTimeout(() => navigate('/'), 1000)
  }

  return (
    <StyledLogin>
      <AuthForm
        values={values}
        onSubmit={handleSubmit}
        onChange={handleChange}
        errors={errors}
        isValid={isValid}
        submitSuccessMSG={submitSuccessMSG}
      />
    </StyledLogin>
  )
}

export default Login
