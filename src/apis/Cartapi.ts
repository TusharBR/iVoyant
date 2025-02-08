import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const envurl=import.meta.env.VITE_BASE_API_URL;
export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl:envurl}),
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { useGetCartsQuery } = cartApi;
