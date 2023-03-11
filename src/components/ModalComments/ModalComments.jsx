import React, { useState, Fragment, useEffect } from 'react'
import Logo from '../Logo/Logo'
import * as S from './styles'
import { useAuth } from '../../hooks/use-auth'

function ModalComments({ active, setActive, advId, comments }) {
  const { isAuth, token } = useAuth()
  const [valuePassword, setValuePassword] = useState('')
 
  const [textComment, setTextComment] = useState('')
  const [priceAdv, setPriceAdv] = useState('')
  const [photos, setPhotos] = useState('')
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        text: textComment,
      }),
    }
    fetch(`http://localhost:8090/ads/${advId}/comments`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })

      .catch(() => console.error())
  }

  if (!active) {
    return null
  }
  
  const formatingDate = (date) =>{
    const formatedDate = new Date(date).toLocaleString(
      "ru",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
    )
    console.log(formatedDate)
    return formatedDate
  }

  return (
    <S.PopupArea onClick={() => setActive(false)}>
      <S.AuthForm onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
        <S.PopupTitle>Отзывы о товаре</S.PopupTitle>
        <S.MyProfileInputArea>
          <S.MyProfileLable htmlFor="text">Добавить отзыв</S.MyProfileLable>
          <S.MyProfileInput
            id="text"
            type="text"
            value={textComment || ''}
            onChange={(e) => setTextComment(e.target.value)}
          />
        </S.MyProfileInputArea>
        <S.FormButton type="submit" onClick={onSubmit}>Опубликовать</S.FormButton>
        <S.CommentsArea>
        {comments
          ? comments.map((item, i) => (
              <S.CommentItem
                key={item.id}
                style={{ textDecoration: 'none' }}
                to={`/advPage/${item.id}`}
              >
                <S.CommentAvatar image={item.author.avatar}/>
               
                <S.CommentTextArea>
                <S.CommentHeader>
                  <S.CommentAuthor>{item.author.name}</S.CommentAuthor>
                  <S.CommentDate>{formatingDate(item.created_on)}</S.CommentDate>
                </S.CommentHeader>
                  <S.CommentTitle>Комментарий</S.CommentTitle>
                  <S.CommentText>
                   {item.text}
                  </S.CommentText>
                </S.CommentTextArea>
              </S.CommentItem>
            ))
          : 'Обьявления не найдены.'}
        </S.CommentsArea>
       

        
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default ModalComments
