import { baseApi } from "./baseApi";

export const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRental: builder.mutation({
      invalidatesTags: ["rental"],
      query: (data) => ({
        url: "/rentals",
        method: "POST",
        body: data,
      }),
    }),
    getRentals: builder.query({
      providesTags: ["rental"],
      query: (args) => {
        // add query params
        const params = new URLSearchParams();
        args?.map((arg: { name: string; value: string }) =>
          params.append(arg.name, arg.value)
        );

        return {
          url: "/rentals",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useCreateRentalMutation, useGetRentalsQuery } = rentalApi;
