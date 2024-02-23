import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Message } from '../../types/Message';

const BASE_URL = 'http://localhost:5000';

export const MessageApi = createApi({
  reducerPath: 'MessageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getAllMessages: builder.query<Message[], string>({
      query: (chatId) => `messages/${chatId}`
    }),
    // getOneMessage: builder.query<Message, string>({
    //   query: (id) => `categories/${id}`
    // }),

    // addNewMessage: builder.mutation
    // <
    //   {Message: Message}, 
    //   {
    //     email: string,
    //     password: string,
    //   }
    // >
    // ({
    //   query: (body) => ({
    //     url: 'registration',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
    editMessage: builder.mutation<Message, Partial<Message>>({
      query: (body) => ({
        url: `messages`,
        method: 'PATCH',
        body,
      }),
    }),
    deleteMessage: builder.mutation<Message, Partial<Message>>({
      query: (body) => ({
        url: `messages`,
        method: 'DELETE',
        body,
      }),
    }),
  })
})

export const {
  useGetAllMessagesQuery,
  // useGetOneMessageQuery,
  // useAddNewMessageMutation,
  useEditMessageMutation,
} = MessageApi;
