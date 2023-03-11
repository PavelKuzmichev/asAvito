import { useSelector } from 'react-redux'

export function useAuth() {
  const { email, token, refreshToken, userId, password, progress } = useSelector(
    (state) => state.user
  )
  return {
    isAuth: !!token,
    email,
    token,
    refreshToken,
    userId,
    password,
    progress,
  }
}
