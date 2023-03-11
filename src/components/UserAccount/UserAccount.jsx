import React from 'react'
import * as S from './styles'

function UserAccount({ location, login }) {
  return (
    <S.SideBar>
      <S.SideBarName location={location}>{login}</S.SideBarName>
    </S.SideBar>
  )
}

export default UserAccount
