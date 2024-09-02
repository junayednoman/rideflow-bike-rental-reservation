import { baseApi } from "./baseApi";

export const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBike: builder.mutation({
      query: (data) => ({
        url: "/bikes",
        method: "POST",
        body: data,
      }),
    }),
    getAllBikes: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateBikeMutation, useGetAllBikesQuery } = bikeApi;
