import React, { useEffect, useState } from 'react'
import * as S from './styles'

function Card({ titleCard, cardImage, cardCity, cardPrice, cardCreateDate, onClick, isYour }) {
  const [image, setImage] = useState('')

  const formatedDate = new Date(cardCreateDate).toLocaleString(
    "ru",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
  );


  /* useEffect(() => {
    fetch(`http://localhost:8090/images/${cardImage}`)
    .then(response => response.json())
    .then(data => setImage(`http://localhost:8090/${data.url}`));
    
  }, [cardImage]) */

  return (
    <S.Card  onClick={onClick}>
    <S.CardImage image={cardImage} />
    <S.CardTitle>{titleCard}</S.CardTitle>
    <S.CardPrice>{cardPrice}</S.CardPrice>
    <S.CardCity>{cardCity}</S.CardCity>
    <S.CardCreateDate>{formatedDate}</S.CardCreateDate>
    </S.Card>
  )
}

export default Card
