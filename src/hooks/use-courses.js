import { useSelector } from 'react-redux'

export function useCourses() {
  const { courses } = useSelector((state) => state.courses)

  return {
    isCourses: !!courses,
    courses,
  }
}
