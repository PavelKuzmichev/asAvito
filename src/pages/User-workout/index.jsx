import React, { useState, useEffect, ReactRouterDOM } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import Exercises from '../../components/Exercises'
import WorkoutProgress from '../../components/Workout-progress'
import WorkoutProgressForm from '../../components/Workout-progress/form/WorkoutProgressForm'
import { useCourses } from '../../hooks/use-courses'

function UserWorkout() {
  const params = useParams()

  const [visible, setVisible] = useState(false)
  const { courses } = useCourses()

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    visible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'scroll')
  }, [visible])

  const { id } = params

  const currentCourseName = id.split('_')[0]
  const currentCourse = courses
    .filter((item) => item.id === currentCourseName)
    .pop()

  const { workouts, name, video } = currentCourse.workouts[id]
  const exercises = workouts ? workouts.map((item) => item.exercises) : []
  const exercisesPopup = workouts
    ? workouts.map((item) => item.exercises_popup)
    : []
  const exercisesProgress = workouts
    ? workouts.map((item) => item.exercises_progress)
    : []
  const title = currentCourse.workouts[id].course

  return (
    <>
      <section>
        <h1>{title}</h1>
        <h2>{name}</h2>
        <ReactPlayer
          url={video}
          width="100%"
          height="640px"
          // eslint-disable-next-line react/jsx-boolean-value
          muted = {true}
          // light={true}
          controls
          // playIcon={playIconVideo}
          style={{ 'margin-bottom': '75px' }}
        />
        <S.ExercisesWrapper>
          {exercises && (
            <Exercises
              visible={visible}
              setVisible={setVisible}
              exercises={exercises}
            />
          )}
          {workouts && (
            <WorkoutProgress
              exercisesProgress={exercisesProgress}
              id={id}
              workouts={workouts}
            />
          )}
        </S.ExercisesWrapper>
      </section>
      {visible && (
        <>
          <WorkoutProgressForm
            exercisesPopup={exercisesPopup}
            setVisible={setVisible}
            workouts={workouts}
            course={currentCourseName}
          />
          <S.Overlay />
        </>
      )}
    </>
  )
}

export default UserWorkout
