import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api/v1",
  }),
  endpoints: (builder) => ({
    todos: builder.query({
      query: () => "/",
    }),

    deletetodos: builder.query({
      query: (id) => `/delete-todo/${id}`,
      method: "DELETE",
    }),
  }),
});

export const { useTodosQuery } = todoApi;
