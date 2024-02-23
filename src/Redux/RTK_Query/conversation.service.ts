import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Conversation } from '../../types/Conversation';

const BASE_URL = 'http://localhost:5000';

export const ConversationApi = createApi({
  reducerPath: 'ConversationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getAllConversation: builder.query<Conversation[], void>({
      query: () => 'conversations'
    }),
    // getOneConversation: builder.query<Conversation, string>({
    //   query: (id) => `categories/${id}`
    // }),

    // addNewConversation: builder.mutation
    // <
    //   {Conversation: Conversation}, 
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
    editConversation: builder.mutation<Conversation, Partial<Conversation>>({
      query: (body) => ({
        url: `conversations`,
        method: 'PATCH',
        body,
      }),
    }),
    deleteConversation: builder.mutation<Conversation, Partial<Conversation>>({
      query: (body) => ({
        url: `conversations`,
        method: 'DELETE',
        body,
      }),
    }),
  })
})

export const {
  useGetAllConversationQuery,
  // useGetOneConversationQuery,
  // useAddNewConversationMutation,
  useEditConversationMutation,
} = ConversationApi;
