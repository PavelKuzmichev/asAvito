import React, { useState, Fragment } from 'react'
import Logo from '../Logo/Logo'
import * as S from './styles'
import { useAuth } from '../../hooks/use-auth'

function ModalAddAdv({ active, setActive, changePassword }) {
  const { isAuth, token } = useAuth()
  const [valuePassword, setValuePassword] = useState('')
  const [titleAdv, setTitleAdv] = useState('')
  const [descriptionAdv, setDescriptionAdv] = useState('')
  const [priceAdv, setPriceAdv] = useState('')
  const [fileList, setFileList] = useState(null)
  const files = fileList ? [...fileList] : []
 

  const handleFileChange = (e) => {
    setFileList(e.target.files)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    const dataFiles = new FormData()
    files.forEach((file, i) => {
      dataFiles.append(`file-${i}`, file, file.name)
    })
    const requestOptions = {
      method: 'POST',
      headers: {
       "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body:  dataFiles ,
    }
    fetch(
      `http://localhost:8090/ads?${new URLSearchParams({
        title: titleAdv,
        price: priceAdv,
        description: descriptionAdv,
      })}`,
      requestOptions
    )
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
      <S.AuthForm onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
        <S.PopupTitle>Новое объявление</S.PopupTitle>
        <S.MyProfileInputArea>
          <S.MyProfileLable htmlFor="title">Название</S.MyProfileLable>
          <S.MyProfileInput
            id="title"
            type="text"
            value={titleAdv || ''}
            onChange={(e) => setTitleAdv(e.target.value)}
          />
        </S.MyProfileInputArea>
        <S.MyProfileInputAreaText>
          <S.MyProfileLable htmlFor="title">Описание</S.MyProfileLable>
          <S.MyProfileTextArea
            id="description"
            value={descriptionAdv || ''}
            onChange={(e) => setDescriptionAdv(e.target.value)}
          />
        </S.MyProfileInputAreaText>
        <S.MyProfileInputArea>
          <S.MyProfileLable htmlFor="title">
            Фотографии товара не более 5 фотографий
          </S.MyProfileLable>
          <S.MyProfileInput
            id="photos"
            type="file"
            onChange={handleFileChange}
            multiple
          />
        </S.MyProfileInputArea>
        <S.MyProfileInputArea>
          <S.MyProfileLable htmlFor="title">Цена</S.MyProfileLable>
          <S.MyProfileInput
            id="price"
            type="number"
            value={priceAdv || ''}
            onChange={(e) => setPriceAdv(e.target.value)}
          />
        </S.MyProfileInputArea>

        <S.FormButton type="submit">Опубликовать</S.FormButton>
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default ModalAddAdv
