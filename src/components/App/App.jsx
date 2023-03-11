import React from 'react'
import { useLocation } from 'react-router-dom'
import { AppRoutes } from '../../routes'
import * as S from './styles'
import { GlobalStyle } from './global-styles'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function App() {
  const { pathname } = useLocation()

  return (
    <S.AppWrapper>
      <GlobalStyle location={pathname} />
      {pathname !== '/signup' && pathname !== '/signin' && (
        <Header location={pathname} />
      )}
      <AppRoutes />
      {pathname !== '/signup' && pathname !== '/signin' && (
        <Footer location={pathname} />
      )}
    </S.AppWrapper>
  )
}

export default App
