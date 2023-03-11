import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'

export function ProtectedRoute({ redirectPath = '/signin', isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
