import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import homeBtnImg from '../../assests/static/home.png'
import profileBtnImg from '../../assests/static/profile.png'
import addAdvBtnImg from '../../assests/static/addNewAdv.png'
import * as S from './styles'

import { useAuth } from '../../hooks/use-auth'
import ModalAddAdv from '../ModalAddAdv/ModalAddAdv'
// для разлогинивания функция и импорт //import{removeUser} from '../../store/slices/userSlices' onClick={()=>dispatch(removeUser())}

function Footer({ location }) {
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
    <S.Footer>
      <Link to="/">
        <S.FooterBtn src={homeBtnImg} image={homeBtnImg} />
      </Link>

      <S.FooterBtn image={addAdvBtnImg}onClick={() => setModalActive(true)}  />
       
        <Link to="/myprofile">
          <S.FooterBtn image={profileBtnImg} />
        </Link>
      

      <ModalAddAdv
        active={modalActive}
        setActive={setModalActive}
        changePassword={changePassword}
      />
    </S.Footer>
  )
}

export default Footer
