import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, updateEmail, updatePassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import * as S from './styles'
import Card from '../../components/Card/Card'
// import cardDance from '../../components/Card/images/card-dance.png'
// import cardStretch from '../../components/Card/images/card-strech.png'
// import cardYoga from '../../components/Card/images/card-yoga.png'
import ModalTraining from '../../components/SelectWorkout/SelectWorkout'
// import cardStep from '../../components/Card/images/card-step.png'
// import cardBody from '../../components/Card/images/card-body.png'
import {
  updateUserEmail,
  updateUserPassword,
} from '../../store/slices/userSlices'
import { useAuth } from '../../hooks/use-auth'
import dummy from '../../assests/static/cardDummyImage.png'

function MyProfile() {
  const { isAuth, token } = useAuth()
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [ads, setAds] = useState(null)
  const [modalActive, setModalActive] = useState(false)
  const [modalLoginActive, setModalLoginActive] = useState(false)
  const [modalTrainingActive, setModalTrainingActive] = useState(false)
  const [currentCourseForCard, setCurrentCourseForCard] = useState('yoga')
  /// /////////////////////////////////////////////////////////////////функции для правки логина/пароля//////////////////////////////////
  const dispatch = useDispatch()
  const auth = getAuth()
  const { email, password, progress } = useAuth()

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    fetch('http://localhost:8090/user', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
        return data
      })
      .then((data) => {
        setName(data.name)
        setSurname(data.surname)
        setCity(data.city)
        setPhone(data.phone)
      })
      .catch(() => console.error())
  }, [])
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    fetch('http://localhost:8090/ads/me', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          return
        }
        setAds(data)
      })

      .catch(() => console.error())
  }, [])

  const changeEmail = (newEmail) => {
    setModalLoginActive(true)
    updateEmail(auth.currentUser, newEmail)
      .then(() => {
        dispatch(
          updateUserEmail({
            email: newEmail,
          })
        )
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const changePassword = (newPassword) => {
    setModalActive(true)
    const user1 = auth.currentUser
    updatePassword(user, newPassword)
      .then(() => {
        dispatch(
          updateUserPassword({
            password: newPassword,
          })
        )
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        surname,
        phone,
        city,
      }),
    }
    fetch('http://localhost:8090/user', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })

      .catch(() => console.error())
  }
  const onChangeHandler = event => {
 
    const dataFile = new FormData()
   dataFile.append('file', event.target.files[0])
    const requestOptions = {
      method: 'POST',
      headers: {
       
        Authorization: `Bearer ${token}`,
      },
      body: dataFile
    }
    fetch('http://localhost:8090/user/avatar', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })

      .catch(() => console.error())
  }

  return (
    <S.MyprofileBlock>
      {user && (
        <>
          <S.MyprofileBlockTitle>
            Здравствуйте, {user.name}!
          </S.MyprofileBlockTitle>
          <S.MyprofileBlockSettingsTitle>
            Настройки профиля
          </S.MyprofileBlockSettingsTitle>
          <S.MyprofileBlockSettings>
            <S.MyprofileBlockAvatarArea>
              <S.MyProfileBlockAvatarImg image={user.avatar} />
              <S.MyprofileBlockAvatarInput type="file" onChange={onChangeHandler} />
              <S.MyprofileBlockAvatarBtn>Загрузить</S.MyprofileBlockAvatarBtn>
            </S.MyprofileBlockAvatarArea>
            <S.MyProfileSettingsForm onSubmit={onSubmit}>
              <S.MyProfileInputArea>
                <S.MyProfileLable htmlFor="name"> Имя</S.MyProfileLable>
                <S.MyProfileInput
                  id="name"
                  type="text"
                  value={name || ''}
                  onChange={(e) => setName(e.target.value)}
                />
              </S.MyProfileInputArea>

              <S.MyProfileInputArea>
                <S.MyProfileLable htmlFor="surname"> Фамилия</S.MyProfileLable>
                <S.MyProfileInput
                  id="surname"
                  type="text"
                  value={surname || ''}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </S.MyProfileInputArea>
              <S.MyProfileInputArea>
                <S.MyProfileLable htmlFor="city"> Город</S.MyProfileLable>
                <S.MyProfileInput
                  id="city"
                  type="text"
                  value={city || ''}
                  onChange={(e) => setCity(e.target.value)}
                />
              </S.MyProfileInputArea>
              <S.MyProfileInputAreaLong>
                <S.MyProfileLable htmlFor="phone"> Телефон</S.MyProfileLable>
                <S.MyProfileInput
                  id="phone"
                  type="text"
                  value={phone || ''}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </S.MyProfileInputAreaLong>
              <S.MyProfileSettingsFormBtn type="submit">
                Сохранить
              </S.MyProfileSettingsFormBtn>
            </S.MyProfileSettingsForm>
          </S.MyprofileBlockSettings>
          <S.MyProfileCardsBlockTitle>Мои товары</S.MyProfileCardsBlockTitle>
        </>
      )}
      <S.MyProfileCardsBlock>
        {ads ? (
          ads.map((item, i) => (
            <Link key={item.id} style={{ textDecoration: 'none' }} to={`/advPage/${item.id}`}>
              <Card
                key={item.id}
                titleCard={item.title}
                cardImage={item.images[0] ? item.images[0].url : ''}
                cardCity={item.user.city}
                cardPrice={`${item.price} Р`}
                cardCreateDate={item.created_on}
              />
            </Link>
          ))
        ) : (
          <>Обьявления не найдены.</>
        )}
      </S.MyProfileCardsBlock>
    </S.MyprofileBlock>
  )
}

export default MyProfile
