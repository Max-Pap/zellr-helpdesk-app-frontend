import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from '../../types/Category';

const BASE_URL = 'http://localhost:5000';

export const CategoryApi = createApi({
  reducerPath: 'CategoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void>({
      query: () => 'categories'
    }),
    // getOneCategory: builder.query<Category, string>({
    //   query: (id) => `categories/${id}`
    // }),

    // addNewCategory: builder.mutation
    // <
    //   {category: Category}, 
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
    editCategory: builder.mutation<Category, Partial<Category>>({
      query: (body) => ({
        url: `categories`,
        method: 'PATCH',
        body,
      }),
    }),
    deleteCategory: builder.mutation<Category, Partial<Category>>({
      query: (body) => ({
        url: `categories`,
        method: 'DELETE',
        body,
      }),
    }),
  })
})

export const {
  useGetAllCategoriesQuery,
  // useGetOneCategoryQuery,
  // useAddNewCategoryMutation,
  useEditCategoryMutation,
} = CategoryApi;
