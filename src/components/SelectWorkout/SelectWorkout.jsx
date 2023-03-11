import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import TrainingBtn from './TrainingBtn'
import { useCourses } from '../../hooks/use-courses'
import { useAuth } from '../../hooks/use-auth'

function SelectWorkout({ active, setActive, course }) {
  const { courses } = useCourses()
  const { progress } = useAuth()
  const onSubmit = (event) => {
    event.preventDefault()
  }

  if (!active) {
    return null
  }
  // проверка выполнен ли прогресс дня
  const currentCourseDays = Object.values(
    courses.filter((item) => item.id === course).pop().workouts
  )

  const checkFullProgress = (dayProgress) => {
    const day = dayProgress.split('_')[1]

    const fullProgress = Object.values(progress.workouts[course][day]).every(
      (item) => item.target === item.user
    )
    return fullProgress
  }

  return (
    <S.PopAreaForTrainings onClick={() => setActive(false)}>
      <S.PopupAreaMenu onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
        <S.Title>Выберите тренировку</S.Title>

        {currentCourseDays.map((training) => (
          <Link key={training.id} to={`/myprofile/courses/${training.id}`}>
            <TrainingBtn
              key={training.id}
              title={training.name}
              subTitle={training.subTitle}
              dayProgress={() => checkFullProgress(training.id)}
            />
          </Link>
        ))}
      </S.PopupAreaMenu>
    </S.PopAreaForTrainings>
  )
}

export default SelectWorkout
