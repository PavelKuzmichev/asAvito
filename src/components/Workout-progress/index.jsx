import React from 'react'
import * as S from './styles'
import { useAuth } from '../../hooks/use-auth'

function WorkoutProgress({ id, exercisesProgress, workouts }) {
  const { progress } = useAuth()

  /* конкретное занятие, обьект вида {
    "target": 20,
    "user": 10
} для вычисления прогресса в процентах и заполнения шкалы */

  // приходит массив с заголовками для окна прогресса с ползунками exercisesProgress
  const testData = exercisesProgress.map((item, i) => {
    const wor = workouts[i].id.split('_')[2]
    const day = workouts[i].id.split('_')[1]
    const course = workouts[i].id.split('_')[0]

    const currentWorkout = progress.workouts[course][day][wor]

    return {
      id: i,
      workout: item,
      progress: (currentWorkout.user * 100) / currentWorkout.target,
      'border-bar': '#565EEF',
      'bgc-bar': '#EDECFF',
    }
  })

  const numberWorkOut = id.slice(-1)
  return (
    <S.ProgressWrapper>
      <S.ProgressTitle>
        Мой прогресс по тренировке {numberWorkOut}:
      </S.ProgressTitle>
      <S.ProgressList>
        {testData?.map((data) => (
          <S.ProgressListItem key={data.id}>
            <p>{data.workout}</p>

            <S.ProgressBar
              borderColor={data['border-bar']}
              bgc={data['bgc-bar']}
            >
              <S.ProgressBarInner
                width={data.progress}
                bgc={data['border-bar']}
              >
                <S.ProgressNumber>{`${data.progress}%`}</S.ProgressNumber>
              </S.ProgressBarInner>
            </S.ProgressBar>
          </S.ProgressListItem>
        ))}
      </S.ProgressList>
    </S.ProgressWrapper>
  )
}

export default WorkoutProgress
