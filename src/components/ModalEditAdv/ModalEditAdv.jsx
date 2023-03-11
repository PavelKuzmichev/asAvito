import React, { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import * as S from './styles'
import { useAuth } from '../../hooks/use-auth'

function ModalEditAdv({ active, setActive, adv, changePassword }) {
  const { isAuth, token } = useAuth()
  const navigate = useNavigate()
  if (!adv) {
    navigate('/')
  }
  console.log(adv)
  const [valuePassword, setValuePassword] = useState('')
  const [title, setTitle] = useState(adv.title)
  const [description, setDescription] = useState(adv.description)
  const [price, setPrice] = useState(adv.price)
  const [photos, setPhotos] = useState(adv.images)
  const onInputChangePassword = (evt) => {
    setValuePassword(evt.target.value)
  }
  const onChangeHandler = (event) => {
    const dataFile = new FormData()

    dataFile.append('file', event.target.files[0])
    setPhotos(dataFile)
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
        title,
        description,
        price,
      }),
    }
    fetch(`http://localhost:8090/ads/${adv.id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })

      .catch(() => console.error())
  }

  if (!active) {
    return null
  }

  return (
    <S.PopupArea onClick={() => setActive(false)}>
      {adv && (
      <S.AuthForm onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
        <S.PopupTitle>Редактировать объявление</S.PopupTitle>
        <S.MyProfileInputArea>
          <S.MyProfileLable htmlFor="title">Название</S.MyProfileLable>
          <S.MyProfileInput
            id="title"
            type="text"
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.MyProfileInputArea>
        <S.MyProfileInputAreaText>
          <S.MyProfileLable htmlFor="title">Описание</S.MyProfileLable>
          <S.MyProfileTextArea
            id="description"
            value={description || ''}
            onChange={(e) => setDescription(e.target.value)}
          />
        </S.MyProfileInputAreaText>
        <S.MyProfileInputArea>
          <S.MyProfileLable htmlFor="title">
            Фотографии товара не более 5 фотографий
          </S.MyProfileLable>
          <S.MyProfileInput
            id="photos"
            type="file"
            onChange={onChangeHandler}
          />
        </S.MyProfileInputArea>
        <S.MyProfileInputArea>
          <S.MyProfileLable htmlFor="title">Цена</S.MyProfileLable>
          <S.MyProfileInput
            id="price"
            type="number"
            value={price || ''}
            onChange={(e) => setPrice(e.target.value)}
          />
        </S.MyProfileInputArea>

        <S.FormButton type="submit">Сохранить</S.FormButton>
      </S.AuthForm>)}
    </S.PopupArea>
  )
}

export default ModalEditAdv
