import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getId } from '../../store/slices/userSlices'
import * as S from './styles'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { getCourses } from '../../store/slices/coursesSlices'
import { useCourses } from '../../hooks/use-courses'
import dummy from '../../assests/static/cardDummyImage.png'
import { useAuth } from '../../hooks/use-auth'

function Main() {
  const { isAuth, token } = useAuth()
const [advs, setAdvs] = useState([])


  useEffect(() => {
    fetch('http://localhost:8090/ads')
  .then(response => response.json())
  .then(data => setAdvs(data));
  }, []) 




  return (
    <div>
      <S.Main>
        <S.MainTitle>
        Объявления
        </S.MainTitle>
        <S.MainCards>
          {
             advs ? advs.map((item, i) => (
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
        </S.MainCards>
       
      </S.Main>
    </div>
  )
}

export default Main
