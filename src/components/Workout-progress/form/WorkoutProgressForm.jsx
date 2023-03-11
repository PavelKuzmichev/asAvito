/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react'
import { getDatabase, ref, get, set, child } from 'firebase/database'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import Button from '../../Button/Button'
import { getProgress } from '../../../store/slices/userSlices'
import { useAuth } from '../../../hooks/use-auth'

function WorkoutProgressForm({ setVisible, exercisesPopup, workouts, course }) {
  const formRef = useRef()
  const dispatch = useDispatch()
  const { id } = useAuth()
  // инпуты
  const [values, setValues] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  useOnClickOutside(formRef, () => setVisible(false))
  // функция отправки данных об изменении прогресса  и последующего забора изменных данных обратно в сторе
  function createUserProgress(wor, value) {
    const workout = wor.split('_')[2]
    const dayOfProgress = wor.split('_')[1]
    const db = getDatabase()
    set(
      ref(
        db,
        `/progress/${id}/workouts/${course}/${dayOfProgress}/${workout}/user/`
      ),

      Number(value)
    )
    const dbRef = ref(getDatabase())

    get(child(dbRef, `progress/${id}/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()

      
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in values) {
      const wor = key
      const value = values[key]
      createUserProgress(wor, value)
    }
  }

  return (
    <S.FormWrapper ref={formRef} onSubmit={onSubmit}>
      <h2>Мой прогресс</h2>
      <S.ProgressForm>
        {exercisesPopup.map((item, i) => (
          <label key={workouts[i].id}>
            {item}
            <S.FormInput
              key={workouts[i].id}
              type="number"
              name={workouts[i].id}
              value={i.user}
              onChange={(event) => handleInputChange(event)}
              placeholder="Введите значение"
            />
          </label>
        ))}

        <Button buttonName="Отправить" type="submit" />
      </S.ProgressForm>
    </S.FormWrapper>
  )
}

export default WorkoutProgressForm
