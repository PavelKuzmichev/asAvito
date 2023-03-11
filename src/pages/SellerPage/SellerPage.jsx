import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, updateEmail, updatePassword } from 'firebase/auth'
import { Link, useParams } from 'react-router-dom'
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

function SellerPage() {
  const [sellerData , setSellerData] = useState(null)
  const [sellerAdvs, setSellerAdvs] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetch('http://localhost:8090/user/all')
  .then(response => response.json())
  .then(data => {

    const currentSeller = data.find(item => item.id === +id)
    setSellerData(currentSeller)});
 
  }, []) 
  useEffect(() => {
    fetch('http://localhost:8090/ads')
  .then(response => response.json())
  .then(data => {
    const sellerAdvsData = data.filter(item=>item.user_id === +id
      )
    setSellerAdvs(sellerAdvsData)});
  
  }, []) 
  const cards =[
    {id: 0,
      title: 'Ракетка для большого тенниса Triumph Pro ST...',
  cardImage: dummy,
  cardPrice: "2 200 ₽",
  cardCity: "Санкт Петербург",
  cardCreateDate: "Сегодня в 10:45"
   },
   {id: 1,
    title: 'Ракетка для большого тенниса Triumph Pro ST...',
  cardImage: dummy,
  cardPrice: "2 200 ₽",
  cardCity: "Санкт Петербург",
  cardCreateDate: "Сегодня в 10:45"
  },
  {id: 2,
    title: 'Ракетка для большого тенниса Triumph Pro ST...',
  cardImage: dummy,
  cardPrice: "2 200 ₽",
  cardCity: "Санкт Петербург",
  cardCreateDate: "Сегодня в 10:45"
  },
  {id: 3,
    title: 'Ракетка для большого тенниса Triumph Pro ST...',
  cardImage: dummy,
  cardPrice: "2 200 ₽",
  cardCity: "Санкт Петербург",
  cardCreateDate: "Сегодня в 10:45"
  }

  ]

  return (
    <S.SellerPage>
      {sellerData && (
      <><S.SellerPageTitle>Профиль продавца</S.SellerPageTitle><S.SellerPageData>
          <S.SellerPageAvatar image={sellerData.avatar}/>
          <S.SellerPageTextArea>
            <S.SellerPageName>{sellerData.name}&nbsp;{sellerData.surname}</S.SellerPageName>
            <S.SellerPageCity>{sellerData.city}</S.SellerPageCity>
            <S.SellerPageCreateDate>Продает товары с {sellerData.sells_from}</S.SellerPageCreateDate>
            <S.SellerPageShowPhoneBtn>
              Показать телефон 8 905 ХХХ ХХ ХХ
            </S.SellerPageShowPhoneBtn>
          </S.SellerPageTextArea>

        </S.SellerPageData><S.SellerPageBloockCardsTitle>Товары продавца</S.SellerPageBloockCardsTitle><S.SellerPageCardsBlock>
        {
             sellerAdvs ? sellerAdvs.map((item, i) => (
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
            : 'Обьявления не найдены.'}
          </S.SellerPageCardsBlock></>)}
     
    </S.SellerPage>
  )
}

export default SellerPage
