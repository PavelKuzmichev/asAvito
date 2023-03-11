/* eslint-disable react/no-array-index-key */
import React from 'react'
import * as S from './styles'
import Button from '../Button/Button'

function Exercises({ visible, setVisible, exercises }) {
  if (exercises.length === 0) {
    return null
  }
  return (
    <div>
      <h3>Упражнения</h3>
      <S.ExercisesList>
        {exercises?.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </S.ExercisesList>

      <Button
        type="button"
        buttonName="Заполнить свой прогресс"
        callback={() => setVisible(!visible)}
      />
    </div>
  )
}

export default Exercises
