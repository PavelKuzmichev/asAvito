import React from 'react'
import * as S from './styles'

function Button({
  buttonName,
  isTransparent,
  isHeaderButton,
  isGreen,
  callback,
  isVisible,
}) {
  if (isGreen) {
    return <S.greenButton onClick={callback}>{buttonName}</S.greenButton>
  }

  if (isHeaderButton) {
    return (
      <S.headerButton visible={isVisible} onClick={callback}>
        {buttonName}
      </S.headerButton>
    )
  }

  return (
    <S.mainButton onClick={callback} transparent={isTransparent}>
      {buttonName}
    </S.mainButton>
  )
}
export default Button
