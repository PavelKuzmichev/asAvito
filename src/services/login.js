import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/user',
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'login/',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: 'signup/',
        method: 'POST',
        body,
      }),
    }),
    token: builder.mutation({
      query: (body) => ({
        url: 'token/',
        method: 'POST',
        body,
      }),
    }),
    refresh: builder.mutation({
      query: (body) => ({
        url: 'token/refresh/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useTokenMutation,
  useRefreshMutation,
} = loginApi
