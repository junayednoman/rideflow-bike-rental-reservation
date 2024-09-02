import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),

    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),

    getMyProfile: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    updateMyProfile: builder.mutation({
      query: (data) => ({
        url: "/users/me",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} = authApi;
