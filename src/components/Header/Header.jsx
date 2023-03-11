import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import * as S from './styles'
import UserAccount from '../UserAccount/UserAccount'
import Button from '../Button/Button'
import { useAuth } from '../../hooks/use-auth'
import ModalAddAdv from "../ModalAddAdv/ModalAddAdv"
// для разлогинивания функция и импорт //import{removeUser} from '../../store/slices/userSlices' onClick={()=>dispatch(removeUser())}

function Header({ location }) {
  const navigate = useNavigate()
   const { isAuth } = useAuth()
   const [modalActive, setModalActive] = useState(false)
   const changePassword = (newPassword) => {
    setModalActive(true)
    
      }
  
  /*
   <Logo location={location} />
      {isAuth && (
        // Просто сделал линк на админку
        <Link to="/myprofile">
          <UserAccount location={location} login={email} />
        </Link>
      )}
      {!isAuth && (
        <Link to="/signin" title="Войти.">
          <Button
            isHeaderButton
            isVisible
            buttonName="Войти"
            onClick={() => navigate('/signin')}
          />
        </Link>
      )} */

  return (
    <><S.Header>
      <S.HeaderBlueHalf>
        {isAuth && (
          <S.HeaderButtonsBlock>
            <S.HeaderButton onClick={() => setModalActive(true)}>Разместить объявление</S.HeaderButton>

            <Link to="/myprofile">
              <S.HeaderButton>Личный кабинет</S.HeaderButton>
            </Link>
          </S.HeaderButtonsBlock>
        )}
        {!isAuth && (
          <Link to="/signin">
            <S.HeaderButton>Вход в личный кабинет</S.HeaderButton>
          </Link>
        )}
      </S.HeaderBlueHalf>
      <S.HeaderWhiteHalf>
        <Logo location={location} />
        {location === '/' && (
          <S.HeaderSearchArea>
            <S.HeaderSearch placeholder='Поиск по объявлениям' />
            <S.HeaderSearchButton>Найти</S.HeaderSearchButton>
          </S.HeaderSearchArea>
        )}
        {location !== '/' && (
          <Link to="/">
            <S.HeaderSearchButton>Вернуться на главную</S.HeaderSearchButton>
          </Link>
        )}
      </S.HeaderWhiteHalf>
      <ModalAddAdv
        active={modalActive}
        setActive={setModalActive}
        changePassword={changePassword} />
    </S.Header>
    <S.HeaderMobile>
        <Logo location={location} />
        <S.HeaderSearch placeholder='Поиск' />
      </S.HeaderMobile></>
  )
}

export default Header
