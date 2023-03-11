import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/catalog',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'track/all/',
    }),
    getAllSets: builder.query({
      query: () => 'selection/',
    }),
    addLike: builder.mutation({
      query: (body) => ({
        url: `track/${body.id}/favorite/`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${body.token}`,
        },
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetAllTracksQuery, useAddLikeMutation } = tracksApi
