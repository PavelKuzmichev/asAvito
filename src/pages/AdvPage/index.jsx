/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link, Redirect } from 'react-router-dom'
import * as S from './styles'
import ModalComments from '../../components/ModalComments/ModalComments'
import { useAuth } from '../../hooks/use-auth'
import ModalEditAdv from "../../components/ModalEditAdv/ModalEditAdv"

function AdvPage() {
  const { id } = useParams()
  const { isAuth, token } = useAuth()
  const [modalActive, setModalActive] = useState(false)
  const [modalEditActive, setModalEditActive] = useState(false)
  const changePassword = (newPassword) => {
    setModalActive(true)
  }

  const navigate = useNavigate()
  const [adv, setAdv] = useState('')
  const [phone, setPhone] = useState(null)
  const [comments, setComments] = useState(null)
  const [bigPhoto, setBigPhoto] = useState('')
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8090/ads/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAdv(data)
        setBigPhoto(data.images[0].url)
      })
  }, [])
  useEffect(() => {
    if (!isAuth) {
      return
    }
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    fetch('http://localhost:8090/user', requestOptions)
      .then((response) => response.json())
      .then((data) => setUserId(data.id))

      .catch(() => console.error())
  }, [])
  const formatedDate = new Date(adv.created_on).toLocaleString('ru', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  useEffect(() => {
    fetch(`http://localhost:8090/ads/${id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
  }, [])
  const deleteAdv = () => {
    if (!isAuth) {
      return
    }
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    fetch(`http://localhost:8090/ads/${id}`, requestOptions)
      .then((response) => response.json())
      .catch(() => console.error())
  }
  function correctRusWord(value) {
    if (value.length === 0) {
      return '?????? ??????????????'
    }
    const quantity = String(value.length)
    const lastDigit = quantity.split('')[quantity.length - 1]

    if (lastDigit === '1') {
      return `${quantity} ??????????`
    }
    if (lastDigit === '2' || lastDigit === '3' || lastDigit === '4') {
      return `${quantity} ????????????`
    }
    return `${quantity} ??????????????`
  }
  return (
    <S.Main>
      {adv && (
        <>
          <S.AdvData>
            <S.AdvImageArea>
              <S.AdvImageAreaBigImage image={bigPhoto} />
              <S.AdvImageAreaBlockSmallImages>
                {adv.images
                  ? adv.images.map((item, i) => (
                      <S.AdvImageAreaSmallImage
                        image={item.url || ''}
                        onClick={() => {
                          setBigPhoto(item.url)
                        }}
                      />
                    ))
                  : '???????????????????? ????????????????????'}
              </S.AdvImageAreaBlockSmallImages>
            </S.AdvImageArea>
            <S.AdvTextArea>
              <S.AdvTextAreaTitle>{adv.title}</S.AdvTextAreaTitle>
              <S.AdvTextAreaCreateDate>{formatedDate}</S.AdvTextAreaCreateDate>
              <S.AdvTextAreaCity>{adv.user.city}</S.AdvTextAreaCity>
              <S.AdvTextAreaReviews onClick={() => setModalActive(true)}>
                {comments ? correctRusWord(comments) : ``}
              </S.AdvTextAreaReviews>
              <S.AdvTextAreaPrice>{adv.price} ??.</S.AdvTextAreaPrice>
              {adv.user_id === userId ? (
                <S.AdvTextAreaButtonsBlock>
                  <S.AdvTextAreaButton onClick={() => setModalEditActive(true)}>??????????????????????????</S.AdvTextAreaButton>

                  <Link to="/myprofile">
                    <S.AdvTextAreaButton onClick={deleteAdv}>
                      ?????????? ?? ????????????????????
                    </S.AdvTextAreaButton>
                  </Link>
                </S.AdvTextAreaButtonsBlock>
              ) : (
                <S.AdvTextAreaShowPhoneBtn
                  onClick={() => setPhone(adv.user.phone)}
                >
                  {phone || `???????????????? ?????????????? 8 905 ?????? ???? ????`}
                </S.AdvTextAreaShowPhoneBtn>
              )}
              <S.AdvTextAreaSellerBlock>
                <S.AdvTextAreaSellerAvatar  image={adv.user.avatar} />
                <S.AdvTextAreaSellerDescription>
                  <Link
                    to={
                      adv.user_id === userId
                        ? '/myprofile'
                        : `/sellerpage/${adv.user.id}`
                    }
                  >
                    <S.AdvTextAreaSellerName>
                      {adv.user.name}
                    </S.AdvTextAreaSellerName>
                  </Link>
                  <S.AdvTextAreaSellerCreateDate>
                    ?????????????? ???????????? c {adv.user.sells_from}
                  </S.AdvTextAreaSellerCreateDate>
                </S.AdvTextAreaSellerDescription>
              </S.AdvTextAreaSellerBlock>
            </S.AdvTextArea>
          </S.AdvData>
          <S.AdvDescription>
            <S.AdvDescriptionTitle>???????????????? ????????????</S.AdvDescriptionTitle>
            <S.AdvDescriptionText>
              {adv.description ? adv.description : '???????????????? ????????????????????'}
            </S.AdvDescriptionText>
          </S.AdvDescription>
        </>
      )}
      <ModalComments
        active={modalActive}
        setActive={setModalActive}
        comments={comments}
        advId={id}
      />
       <ModalEditAdv
        active={modalEditActive}
        setActive={setModalEditActive}
        adv={adv}
      />
    </S.Main>
  )
}

export default AdvPage
